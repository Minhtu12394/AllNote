---
outline: deep
---

# DOM interaction with Vue

## 1. Data

### 1.1 Chuỗi nội suy

- Khi dùng chuỗi nội suy `{{ {} }}` trong HTML được quản lý bởi Vue thì sẽ tham chiếu đến các thuộc tính mà hàm data trả về.
- Chuỗi nội suy chỉ hoạt động giữa các thẻ đóng và mở của HTML
- Ví dụ

  ```html
  <div id="app">
    <p>{{ courseGoal }}</p>
    => hiển thị trên web là "Any thing"
  </div>
  ```

  ```js
  const app = Vue.createApp({
    data() {
      return {
        courseGoal: "Any thing",
      };
    },
  });

  app.mount("#app");
  ```

### 1.2. Binding Attributes

- Để có thể truy xuất data do Vue quản lý ở các attribute của thẻ HTML thì cần dùng `v-bind`
- Ví dụ

  ```html
  <div id="app">
    <p>{{ courseGoal }}</p>
    <p>Learn more <a v-bind:href="vueLink">about Vue</a></p>
  </div>
  Nếu viết
  <p>Learn more <a href="{{vueLink}}">about Vue</a></p>
  thì vueLink sẽ không hoạt động
  ```

  ```js
  const app = Vue.createApp({
    data() {
      return {
        courseGoal: "Any thing",
        vueLink: "https://vuejs.org",
      };
    },
  });

  app.mount("#app");
  ```

- Short hand của `v-bind`

```html
thay vì viết v-bind:href thì viết ngắn thành :href
<div id="app">
  <p>{{ courseGoal }}</p>
  <p>Learn more <a :href="vueLink">about Vue</a></p>
</div>
```

## 2. Methods

- Định nghĩa các hàm sẽ thực thi. VD: khi click button, khi hover....
- Có thể dùng chuỗi nội suy để gọi hàm được định nghĩa ở options `methods`
- Ví dụ

  ```html
  <div id="app">
    <p>{{ courseGoal }}</p>
    <p>{{ outPutGoal() }}</p>
  </div>
  ```

  ```js
  const app = Vue.createApp({
    data() {
      return {
        courseGoal: "Any thing",
      };
    },
    methods: {
      outPutGoal() {
        const randomNumber = Math.random();
        if (randomNumber < 0.5) {
          return "Learn Vue!";
        } else {
          return "Master Vue!";
        }
      },
    },
  });

  app.mount("#app");
  ```

- Để truy vấn data trong Vue, dùng từ khoá `this`. Khi dùng `this` Vue sẽ trả về toàn bộ dữ liệu có trong `return` của options `data`
- Ví dụ:

  ```js
  const app = Vue.createApp({
    data() {
      return {
        courseGoalA: "Goal A",
        courseGoalB: "Goal B",
        courseGoal: "Any thing",
      };
    },
    methods: {
      outPutGoal() {
        const randomNumber = Math.random();
        if (randomNumber < 0.5) {
          return this.courseGoalA;
        } else {
          return this.courseGoalB;
        }
      },
    },
  });
  ```

## 3.Event

### 3.1 Giới thiệu

- Cách dùng event: `v-on:event_name`
- Short hand: `@event_name`
- VD:
  ```js
  - v-on:click="biểu thức js, gọi hàm..."
  - @click="biểu thức js, gọi hàm..."
  - v-on:input="biểu thức js, gọi hàm..."
  - @input="biểu thức js, gọi hàm..."
  ```

### 3.2 Data Binding + Event Binding = Two way binding

- Có thể thay đoạn code sau

```html
<input
  type="text"
  v-bind:value="name"
  v-on:input="setName($event, 'Schwarzmüller')"
/>

<!-- Gộp v-bind và v-on -->
<input type="text" v-model="name" />
```

## 4. Khác nhau giữa Method, Computed và Watcher

| Tiêu chí                          | `methods`                                                             | `computed`                                                        | `watch`                                   |
| --------------------------------- | --------------------------------------------------------------------- | ----------------------------------------------------------------- | ----------------------------------------- |
| ⚙️ Mục đích chính                 | Gọi hàm để thực thi logic                                             | Tính toán dựa trên reactive data và cache kết quả                 | Theo dõi sự thay đổi của data và thực thi |
| 🔁 Có cache không?                | ❌ Không có                                                           | ✅ Có cache (chỉ chạy lại khi dependency thay đổi)                | ❌ Không (chạy mỗi khi giá trị thay đổi)  |
| 👀 Theo dõi thay đổi              | ❌ Không                                                              | ✅ Tự động theo dõi dependency                                    | ✅ Theo dõi biến chỉ định                 |
| 🧩 Dùng để                        | Gọi thủ công logic                                                    | Tính toán giá trị hiển thị, dùng cho data phụ thuộc vào data khác | Gọi API, xử lý side effects               |
| 🏃 Khi nào chạy                   | Khi gọi thủ công (trong template hoặc code) thường dùng với các event | Tự động khi dependency thay đổi                                   | Tự động khi giá trị được watch thay đổi   |
| 📦 Side effects (tác động ngoài)? | ✅ Có thể                                                             | ❌ Không nên (chỉ dùng để tính toán)                              | ✅ Rất phù hợp                            |

## 5. Dynamic styling

Ví dụ:
```html
<div class="demo" #Như cách viết bình thường
     :class="{active: boolean}" # v-bind cho class. thêm class active
     nếu true
     :class="['demo', {active: boxBSelected}]" => kiểu này cũng được
     @click="expression"
>
</div>
```
