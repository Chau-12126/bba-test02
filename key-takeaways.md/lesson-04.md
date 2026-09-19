## **Lesson 04**
### **1. Cách khai báo object**
- Cú pháp: 
```typescirpt
let/ const xe = {
         mauSac: 'Xanh',
         hangXe: 'toyota'};
         console.log (xe.mauSac);
```

- Là kiểu dữ liệu dùng để lưu trữ một tập hợp các cặp 
- **Note:** Nếu key có dấu cách thì phải có dấu "". Tương tự khi muốn console.log (tên object ['Tên thuộc tính'])
- **Gán giá trị mới cho object:** `tenObject.tenThuocTinh = giá trị`

### **2. Cách khai báo Array**
- Cú pháp: 
```
const array [giaTri1, giaTri2,..]
console.log (array[0])`;
```
- Mảng có 5 phần tử nhưng vị trí phải trừ đi 1, vị trí phần tử được đếm từ 0
- Muốn in ra độ dài của mảng `console.log(tenArray.length)`
- Gán lại giá trị của array array[0] = 'giá trị'
- Muốn thêm mảng ở cuối,.. ![Ảnh capscreen thêm/xóa phần tử mảng](C:\Users\nghiemdd\Downloads\image.png)

### **3. Function**
- Là một hàm, khối lệnh được đặt tên. có thể gọi lại nhiều lần mà ko cần code lại
- Cú pháp: 
```
function muaNha()
{
    console.log('mua nhà năm 2026');
}
muaNha(); // gọi lại hàm đã khai báo
```
- Đặt tên hàm nên bắt đầu bằng động từ

#### **Function với tham số**
- Ví dụ:
```
function muaNha(dienTich, soDo){
    console.log(`Dien tich ${dienTich}:${soDo}`)
}
muaNha(60, "50 năm"); // in ra theo tình huống giá trị truyền vào
muaNha(70; "trọn đời")
```
- Một function có nhiều tham số

### **4. Array util**
4.1. Map
- Tạo mảng mới bằng cách áp dụng một hàm lên từng phần tử của mảng gốc
```
const student = [An, Bình, Nghiêm]
const studentList  = student.map(name, index) =>
({
    id = index + 1,
    name: name,
    code: `SV01$(index + 1)
});

console.log(studentList); // (id: 1, name: An, code: SV011)
(id: 2, name: Bình, code: SV012)
```
---
4.2. Filter
- Tạo mảng mới chỉ chứa các phần tử thỏa mãn điều kiện trong hàng callback. Trả về mảng được lọc
- Ví dụ:
```
const product = [
    {name: 'Bàn trà, price: 148000, inStock: false},
    {name: 'Bánh dẻo', price: 86000, inStock: true}
];
// Lọc sản phẩm <100k
const lowProduct = product.filter(products => products.price < 10000)
console.log(lowProduct);

//Lọc nhiều điều kiện > 100k và còn hàng
const mutipleProduct = product.filter(products => products.inStock && products.price > 100000);
console.log(mutipleProduct);
```
---
4.3 Find
- Tìm và trả về phần tử đầu tiên trong mảng thỏa mãn điều kiện. Trả về undefined nếu ko tìm thấy
- Ví dụ:
```
const user = [
    {id: 002, name: 'Châu', role: 'admin', active: true},
    {id: 003, name: 'Tuấn', role: 'viewer', active: false}    
];

// Tìm user theo Id
const userId = 003;
const users = user.find(u == u.id === userID);
console.log(users) // {id: 003, name: 'Châu'}
```
---
4.4 Reduce
- Duyệt qua mảng và tích lũy thành 1 gtri duy nhất 
- Ví dụ 
![Ảnh ví dụ về reduce](C:\Users\nghiemdd\Downloads\example-reduce.png)
---
4.5 Some
- Kiểm tra xem có ít nhất một phần tử trong mảng thỏa mãn điều kiện hay ko? Trả ra true/false

---
4.6 Every
- Kiểm tra xem tất cả phần tử trong mảng thỏa mãn điều kiện hay ko? Trả ra true/false

---
4.7 Sort
- Sắp xếp các phần tử theo thứ tự. Thay đổi mảng gốc
---
4.8 Push
- Thêm một hoặc nhiều phần tử vào cuối mảng
