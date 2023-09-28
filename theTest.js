// CÂU 1
// Viết chương trình đệ quy tính tổng các số từ 1 đến n, với n là một số cho trước. 

function total(num) {
  if (num === 0) {
    return 0;
  }
  return num + total(num - 1);
}
console.log(total(5));


// CÂU 2
// Cho một dãy số [1, 25, 7, -7, -3, 12, -22, 0]

// a. Sử dụng JavaScript để sắp xếp dãy số theo thứ tự tăng dần.
// 	Kết quả: [-22, -7, -3, 0, 1, 7, 12, 25]

// b. Sắp xếp dãy số tăng dần theo giá trị tuyệt đối (trong trường hợp số 2 số bằng nhau thì số âm được ưu tiên đứng trước)
// 	Kết quả: [0, 1, -3, -7, 7, 12, -22, 25]

// Lưu ý: Không sử dụng hàm Sort, Abs có sẵn trong ngôn ngữ lập trình bạn dùng.

//a
let numArray = [1, 25, 7, -7, -3, 12, -22, 0];

function arrSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length -1 -i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
console.log(arrSort(numArray));

//b
let absArray = [1, 25, 7, -7, -3, 12, -22, 0];

function absSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (
        (arr[j] < 0 ? -arr[j] : arr[j]) >= (arr[j + 1] < 0 ? -arr[j + 1] : arr[j + 1])
      ) {
        [arr[j+1], arr[j]] = [arr[j], arr[j+1]];
      }
    }
  }
  return arr;
}

console.log(absSort(absArray));

// CÂU 3
// Viết hàm sử dụng regex biến đổi url theo định dạng mong muốn. Hàm này có mục tiêu làm thay đổi kích thước ảnh theo các tỷ lệ đã được định nghĩa trước:

// Các định dạng: _100x, _x100, _100x100
// Nằm liền kề dấu chấm của phần mở rộng: url_100x.jpg

let tests = [
  {
    input: "https://cdn.shopify.com/e.jpg?v=15",
    output: "https://cdn.shopify.com/e_100x.jpg?v=15",
    size: "100x"
  },
  {
    input: "https://cdn.shopify.com/e_100x200.jpg?v=15",
    output: "https://cdn.shopify.com/e_x200.jpg?v=15",
    size: "x200"
  },
  {
    input: "https://cdn.shopify.com/e-jpg_200x100.jpg?v=15",
    output: "https://cdn.shopify.com/e-jpg_100x.jpg?v=15",
    size: "100x"
  },
  {
    input:
      "https://cdn.shopify.com/100xMacBook.jpg_640x640_3_result_100x.jpg?v=15",
    output:
      "https://cdn.shopify.com/100xMacBook.jpg_640x640_3_result_x100.jpg?v=15",
    size: "x100"
  },
  {
    input: "https://cdn.shopify.com/e-800x600-jpg.jpg?v=15",
    output: "https://cdn.shopify.com/e-800x600-jpg_100x200.jpg?v=15",
    size: "100x200"
  }
];

function convertUrl(tests) {
  for (let i = 0; i < tests.length; i++) {
    let test = tests[i];
    const regex = /\d{3}/gm;
    const replaceNum = "100";
    test.input = test.input.replace(regex, replaceNum);
    test.output = test.output.replace(regex, replaceNum);
    test.size = test.size.replace(regex, replaceNum);
  }
  return tests;
}
console.log(convertUrl(tests));
