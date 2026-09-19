# **Tổng hợp kiến thức Bài 2**

### **1. Tổng quan về Git và Github**
Git được dùng phổ biến, được cài trên máy local cá nhân. Là một command line tool, công cụ quản lý phiên bản và đưa file vào Git Repository
Github là một website online, là nơi nhận các file được đẩy từ máy cá nhân lên (chứa các file được upload lên Git repository)

### **2. Ba vùng trong Git**
| **Working directory** | **Staging area** | **Repository** |
|-----------------------|------------------|-----------------|
| Là nơi làm việc thực tế, có thể chỉnh sửa code thoải mái| Chứa các thay đổi đã được chọn để đưa vào commit tiếp theo | Lưu trữ vĩnh viễn toàn bộ commit, branch, tag của dự án |
|Git init: khởi tạo ra 3 vùng | git add ten-file, ten-file-2 (để add nhiều file). git add . (để add all file) | git commit -m"message". git push origin main |
 

#### **2.1 Kiểm tra trạng thái trong Git**    
Sử dụng ```git status``` để kiểm tra trạng thái các file nằm ở vùng nào
Tương ứng hiện thị vị trí file với các màu: đỏ - working directory, xanh - staging, xám - repository
    
#### **2.2 Xem danh sách commit trong Git vớigit log**    
Hiển thị thông tin commit với mã commit, Author, Date, Commit bao nhiêu file?
Thông tin commit mới nhất được đẩy lên đầu

#### **2.3 Cấu hình với git config**   
Mục đích: Nói cho git biêt bạn là ai, nếu ko sẽ lỗi
Câu lệnh ```git config --global user.name "Chau Nguyen"
git config --global user.email "xx@gmail.com```
- Nếu muốn dùng riêng Tên cho 1 repo khác ` git config user.name "Chau Chau" `
- Muốn xem tất cả danh sách đã hiện thị thì dùng lệnh `get config --list`

#### **2.4 Giúp code gọn gàng theo quy tắc**
- Format type (loại commit): mô tả ngắn
- VD: git commit -m"feat: Thêm tính năng mới"
- VD: git commit -m"fix: Sửa lỗi, chỉnh sửa code"
- VD: git commit -m"chore: Comment code hoặc chỉnh sửa nhỏ lẻ"

### **3. Tổng quan về JavaScript**
---
#### **3.1 Comment trong JS**
- Bằng cách `//` hoặc `Shift /`

#### **3.2 Biến và hằng trong JS**
- Variable: biến, có thể biến thiên, thay đổi. Khai báo biến `let Name = 'Chau';`
- Const: hằng. **KHÔNG** thể thay đổi được. Khai báo `const PI = 3.14`

#### **3.3 Kiểu dữ liệu**
- Là các kiểu dữ liệu mà biến và hằng mang
+ Có 8 kiểu dữ liệu:
    + Number (khi console.log() sẽ ra số màu vàng)
    + String (khi console.log() sẽ ra số màu đen)
    + Boolean (giá trị logic true/false)
- Cách để biết biến và hằng đó thuộc kiểu dữ liệu gì? bằng cách gõ `console.log(typeOf tên biến)`

#### **3.4 Toán tử so sánh, toán học, logic**
- Toán tử so sánh đơn giản là so sánh <,>,<=,>=, =. Khi console.log sẽ trả ra giá trị true/false
- Toán tử toán học đơn giản là các phép tính + - * / (Khi chia cho 0 sẽ hiển thị Infinity)
- Toán tử logic `&&`: với điều kiện phải cả 2 điều kiện đều = true thì mới trả kết quả true
- Toán tử logic `||`: hoặc. Chỉ cần 1 trong 2 điều kiện là true thì trả kết quả là true

#### **3.5 Toán tử một ngôi**
- Là toán tử chỉ cần 1 toán hạng để thực hiện. Ví dụ 1+1 là 2 toán hạng. Ví dụ của toán tử một ngôi như sau: `x++`, `++x`, `--x`, `x--`
- Các toán tử một ngôi **Prefix** `++x` hoặc `--x` là _tăng trước trả về sau_. ```Ví dụ: let x = 12
console.log(++x)
console.log(x)```
=> Giá trị của x=13, 13
- Các toán tử một ngôi **Postfix** `x++` hoặc `x--` là _trả trước tăng sau_. Ví dụ: ```let x = 12 
console.log(x++) 
console.log(x)``` => Giá trị của x=12, 13

### **4. Tổng quan về Markdown** là bài tập này nè ;vv
 
