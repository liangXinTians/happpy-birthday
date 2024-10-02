/*
 * @Author: your name
 * @Date: 2021-03-25 09:07:37
 * @LastEditTime: 2021-03-25 09:12:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tiny-heart-master\birthday-mobile\js\index.js
 */
/* 姐姐 */
// $("#login-button").click(function (event) {
//   var userName = document.getElementById("userName").value
//   var pwd = document.getElementById("pwd").value
//   //修改密码请改此处
//   if (userName == "0713" && pwd == "1003") {
//     event.preventDefault()
//     $("form").fadeOut(500)
//     $(".wrapper").addClass("form-success")
//     setTimeout(function () {
//       location.href = "BirthdayCake.html"
//     }, 2000)
//   } else {
//     alert("Wrong Password")
//   }
// })

// 用于记录密码错误的次数
var passwordAttemptCount = 0
// 用于记录账号错误的次数
var userNameAttemptCount = 0

$("#login-button").click(function (event) {
  var userName = document.getElementById("userName").value
  var pwd = document.getElementById("pwd").value

  // 定义正确的账号和密码
  var correctUserName = "0713"
  var correctPwd = "1003"

  // 检查账号是否正确
  if (userName != correctUserName) {
    if (userNameAttemptCount === 0) {
      // 第一次账号错误
      alert("账号不对，很简单的哦，重新填一下嘛！")
    } else {
      // 第二次及以后账号错误
      alert("姐姐真笨，这都能写错，再试一次")
    }
    // 增加账号错误次数
    userNameAttemptCount++
  }
  // 账号正确，检查密码
  else if (pwd != correctPwd) {
    if (passwordAttemptCount === 0) {
      // 第一次密码错误
      alert("不对不对，密码不对，姐姐再试一次嘛！")
    } else {
      // 第二次及以后密码错误
      alert("笨死啦，密码又错啦！")
    }
    // 增加密码错误次数
    passwordAttemptCount++
  }
  // 账号和密码都正确
  else {
    event.preventDefault()
    alert("姐姐真聪明，账号密码都对啦！")
    $("form").fadeOut(500)
    $(".wrapper").addClass("form-success")
    setTimeout(function () {
      location.href = "BirthdayCake.html"
    }, 2000)
  }
});


