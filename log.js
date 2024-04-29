document.getElementById("login-form").addEventListener("submit", function(event) {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // 自定义验证逻辑
  if (!isValidEmail(email)) {
    alert("请输入有效的电子邮箱地址。");
    event.preventDefault(); // 阻止表单提交
  } else if (password.length < 8) {
    alert("密码长度至少为8个字符。");
    event.preventDefault(); // 阻止表单提交
  }
});

function isValidEmail(email) {
  // 使用正则表达式验证邮箱格式
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
