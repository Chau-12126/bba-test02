## **Lesson 03**

### **1. Để unstage từ staging về working thì dùng câu lệnh sau:** 
`git restore --staged`  => để unstage all file. 
- Tương tự với 1 file và nhiều file thì dùng  `git restore --staged file1 file2`

### **2. Để uncommit từ repo về staging và working**
- Từ repo về staging: `git reset --soft HEAD~1` 
=> **Note:** 1 tương ứng với 1 file được commit gần nhất 
- Từ repo về working: `git reset HEAD~1`

### **3. Câu điều kiện**
- Để kiểm tra một đoạn logic trước khi chạy. Nếu điều kiện đúng thì mới chạy. if..else
- Ví dụ: `if (điều kiện)
{ 
    code
}`

### **4. Vòng lặp**
- Cú pháp:  `for (khởi tạo; điều kiện lặp; lần cập nhật)
{
    code
}`
- Trong đó:
+ Khởi tạo chỉ chạy một lần duy nhất, khi vòng lặp bắt đầu. **Ví dụ:** `let i =0`
- Điều kiện lặp: nếu đúng thì chạy tiếp, sai thì dừng. **Ví dụ:** `i <= 6`
- Lần cập nhật: chạy vào mối cuối vòng lặp để thay đổi giá trị của biến đếm. **Ví dụ:** `i++`
- Ví dụ:
`for (let i = 0; i<= 10; i++)
{
    i % 2 === 0;
    console.log(i)
}`

### **4. Để thay đổi message commit mới nhất dùng lệnh `git commit --amend -m<message mới>`