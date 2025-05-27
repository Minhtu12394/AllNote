---
outline: deep
---

# HTML - CSS

## HTML

### 1. Form

- Các thẻ `<input>` luôn có `type`, `name` và `placeholder` nếu có.
- Để link `<label>` với `<input>` thì trong thẻ `<label>` cần thêm thuộc tính `for` có giá trị giống với `id` của thẻ `<input>`

### 2. Table

- `<thead>` table header
- `<tbody>` table primary data
- `<tr>` table row
- `<td>`data cell
- `<th>`header cell

## CSS

## I. Cơ bản

- Selector
  - Selector thẻ: `div`, `p`, `h1`...
  - Selector class: `.class-name`
  - Selector id: `#id-name`
  - Selector con, anh em: `div > p`, `ul li`
  - Pseudo-class (giả lớp): `:hover, :first-child, :nth-child()`
  - Pseudo-element (giả phần tử): `::before, ::after`
  - `span[class~="xxx"]` select toàn bộ thẻ span có chứa class `xxx`
  - `tr[class="total"]` CHỈ select `tr` có class là `total`
  - `tr.total` select `tr` có class chứa `total`

## II. Các thuộc tính phổ biến

### 1. Box model: thuộc tính mô hình box:

- `box-sizing`: border-box cách tính kích thước phần tử bao gồm hoặc không `padding` và `border`
- `padding`: Khoảng cách bên trong giữa nội dung và viền
- `margin`: Khoảng cách bên ngoài phần tử
  - Khi sử dụng với 1 giá trị => Tất cả vị trí đc set = nhau.
  - Khi sử dụng margin với 2 giá trị. `margin: 10px, 10px`
    - `margin top và bottom` được định nghĩa ở giá trị thứ nhất,
    - `margin left và right` được định nghĩa ở giá trị thứ 2
- `border`: Viền xung quanh phần tử
- `width, height`: Kích thước của phần tử

### 2. Layout: thuộc tính liên quan đến bố cục và sắp xếp:

- `display`: hiển thị phẩn tử

  - `block`: phần tử chiếm toàn bộ chiều ngang trên một dòng và đẩy các phần thử khác xuống dòng dưới.

    - VD:`div`, `p`, `h1` là các phần tử có tính chất block mặc định

  - `inline`: phần tử chiếm chiều dài vừa đủ với nội dung và không xuống dòng.Có thể đặt nhiều phần tử inline trên cùng 1 dòng.

    - VD:`span`, `a`, `strong` là các phần tử có tính chất inline mặc định

  - `inline-block`: Giống inline nhưng sử dụng được `width`, `height`, `padding`, `margin`.
  - `flex`: Giúp phần từ cha quản lý các phần tử con theo chiều ngang hoặc dọc

    - Truc chính được xác định bằng `flex-direction`.
      - `row` (default): Các item hiển thị theo chiều ngang từ trái sang phải.
      - `row-reverse`: Hiển thị theo chiều ngang từ phải sang trái
      - `column`: Các item hiển thị theo chiều dọc từ trên xuống.
      - `column-reverse`: Hiển thị theo chiều dọc từ dưới lên.
    - `flex-wrap`: Nếu khu vực hiển thị nhỏ, sẽ chuyển item sang row hoặc column mới. Mặc định là `nowrap`
    - `justify-content`: Điều chỉnh các phần tử được sắp xếp theo trục chính.
      - `flex-start`: Các phần tử sắp xếp từ đầu trục chính.
      - `flex-end`: Các phần tử sắp xếp từ cuối trục chính.
      - `center`: Các phần tử sắp xếp ở giữa trục chính.
      - `space-between`: Các phần tử cách đều nhau. Phần tử đầu tiên ở đầu trục, phần tử cuối ở cuối trục.
      - `space-around`: Khoảng cách đều nhau giữa các phần tử, bao gồm cả phần tử đầu và cuối.
    - `align-item`: Điều chính các item theo trục phụ.
    - `align-content`: Điều chỉnh cách nhiều dòng (nếu các phần tử wrap) được sắp xếp dọc theo trục phụ.

  - `grid`: Giúp sắp xếp các phần tử con theo dạng lưới với các hàng và cột.
  - `none`: phần tử không hiển thị

- `position`: vị trí phần tử
  - `static`: là thuộc tính mặc định. Được hiển thị theo luồng data, có thể di chuyển khỏi vị trí ban đầu bằng cách sử dụng `top, right, bottom, left`
  - `relative`: Phần tử vẫn tuân theo luồng tài liệu, nhưng có thể được di chuyển khỏi vị trí ban đầu bằng cách sử dụng các thuộc tính định vị `top, right, bottom, left`
  - `absolute`: Phần tử được loại bỏ khỏi luồng tài liệu và lấy gốc toạ độ là các phần tử cha gần nhất có thuộc tính `position: relative`, `absolute`, `fixed`, `sticky`. Nếu không có phần tử cha nào, nó sẽ định vị theo cửa sổ trình duyệt.
  - `fixed`: Phần tử được cố định theo cửa sổ trình duyệt, không bị ảnh hưởng khi trang cuộn.
  - `sticky`: Phần tử hoạt động như `relative` cho đến khi người dùng cuộn trang tới một vị trí xác định, sau đó nó sẽ trở thành `fixed`.

### 3. Màu sắc:

- 3.1 Các cách chỉ định màu sắc:

  - Tên màu: `red`, `green`, `blue`....
    ```css
    div {
      color: red; /* Màu chữ đỏ */
      background-color: lightblue; /* Màu nền xanh nhạt */
    }
    ```
  - Mã màu HEX: Mã màu HEX bao gồm 6 ký tự, với 2 ký tự đầu tiên cho màu đỏ, 2 ký tự tiếp theo cho màu xanh lá cây, và 2 ký tự cuối cùng cho màu xanh dương.
    - Cú pháp đầy đủ: #RRGGBB
    - Cú pháp rút gọn: #RGB
    ```css
    div {
      color: #ff0000; /* Màu chữ đỏ */
      background-color: #00ff00; /* Màu nền xanh lá cây */
    }
    ```
  - Giá trị `RGB`: Chỉ định màu bằng cách pha trộn ba màu đỏ (Red), xanh lá cây (Green), và xanh dương (Blue), với giá trị mỗi màu từ 0 đến 255.

    - Cú pháp: `rgb(red, green, blue)`

      ```css
      div {
        color: rgb(255, 0, 0); /* Màu chữ đỏ */
        background-color: rgb(0, 255, 0); /* Màu nền xanh lá cây */
      }
      ```

  - Giá trị `RGBA`: Mở rộng của `RGB` có thêm A(Alpha) để điều khiển độ trong suốt.

    ```css
    div {
      background-color: rgba(
        0,
        0,
        255,
        0.5
      ); /* Màu xanh dương với độ trong suốt 50% */
    }
    ```

- 3.2 Các thuộc tính màu sắc:
  - color: màu chữ.
  - background-color: màu nền
  - border-color: màu viền
  - background: cho phép sử dụng nhiều thuộc tính nền.
- 3.3 Hiệu ứng màu sắc:

  - Chuyển màu nền

    - `linear-gradient`: Chuyển màu theo đường thẳng.

      - Cú pháp: `linear-gradient(angle, color-stop1, color-stop2, ...)`

        ```css
        div {
          background: linear-gradient(
            90deg,
            red,
            yellow
          ); /* Chuyển sắc từ đỏ sang vàng theo chiều ngang */
        }
        ```

    - `radial-gradient`: Chuyển màu theo hình tròn

      - Cú pháp: `radial-gradient(shape, color-stop1, color-stop2, ...)`

        ```css
        div {
          background: radial-gradient(
            circle,
            red,
            yellow
          ); /* Chuyển sắc từ đỏ sang vàng theo hình tròn */
        }
        ```

- 3.4 Hiệu ứng đổ bóng:

  - `text-shadow` :tạo hiệu ứng bóng cho văn bản. Có thể chỉ định độ lệch ngang, độ lệch dọc, độ mờ, và màu sắc của bóng.

    - Cú pháp: `text-shadow: offset-x offset-y blur-radius color;`

      - `offset-x`: Đổ bóng theo chiều ngang
      - `offset-y`: Đổ bóng theo chiều dọc
      - `blur-radius`: độ mờ của bóng

      ```css
      h1 {
        text-shadow: 3px 3px 5px rgba(0, 0, 0, 0.5); /* Bóng màu đen mờ, lệch 3px sang phải và xuống dưới */
      }

      h2 {
        text-shadow: -4px -4px 2px blue; /* Bóng màu xanh, lệch 4px lên trên và sang trái */
      }
      ```

  - `box-shadow` :tạo hiệu ứng bóng cho các phần tử dạng khối như `div`. Bạn có thể chỉ định độ lệch ngang, độ lệch dọc, độ mờ, và màu sắc của bóng. - Cú pháp: `box-shadow: offset-x offset-y blur-radius spread-radius color;` - `spread-radius`: Xác định độ mở rộng của bóng. Giá trị dương làm bóng mở rộng ra ngoài phần tử, giá trị âm thu nhỏ bóng vào bên trong phần tử.

    ```css
    /* Bóng lệch 5px xuống dưới và 5px sang phải*/
    mờ 10px -- > div {
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
    }

    /* Bóng lệch 8px sang phải, 4px xuống dưới, mờ 15px, mở rộng ra 5px */
    button {
      box-shadow: 8px 4px 15px 5px rgba(0, 0, 255, 0.5);
    }
    ```

### 4. Animation:

- `transform-origin`:là một thuộc tính trong CSS xác định điểm gốc (origin) mà tại đó các phép biến đổi (transform) được áp dụng. Mặc định, gốc của phép biến đổi là tâm (center) của phần tử.

  ```css
  transform-origin: x y z;
  x: Giá trị trên trục X (chiều ngang).
  y: Giá trị trên trục Y (chiều dọc).
  z (tùy chọn): Giá trị trên trục Z (trong không gian 3D)
  ```
