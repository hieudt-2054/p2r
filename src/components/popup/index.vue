<template>
  <div class="content">
    <div class="card">
      <div class="firstinfo">
        <img src="https://i.pinimg.com/originals/10/7a/7d/107a7deaffc9c719fcd9c78f0292b29c.jpg" />
        <div class="profileinfo">
          <h1>Duong Trung Hieu</h1>
          <h3>Developer</h3>
          <p class="bio">"- Review pull giúp em a ei"</p>
          <button @click="showSetting" class="btn-hover color-7">Cấu hình</button>
          <button @click="showDocs" class="btn-hover color-8">Tài liệu</button>
        </div>
      </div>
    </div>
    <div class="badgescard">
      <i class="devicon-ubuntu-plain-wordmark colored"></i>
      <i class="devicon-vuejs-plain-wordmark colored"></i>
      <i class="devicon-php-plain colored"></i>
      <i class="devicon-javascript-plain colored"></i>
      <i class="devicon-mysql-plain-wordmark colored"></i>
      <i class="devicon-docker-plain-wordmark colored"></i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: null
    }
  },
  methods: {
    showSetting() {
      chrome.tabs.create({ url: 'assets/options.html' })
    },
    showDocs() {
      chrome.tabs.create({ url: 'assets/options.html#/docs' })
    }
  }
}
</script>
<style scoped>
@import 'https://cdn.jsdelivr.net/gh/konpa/devicon@master/devicon.min.css';
</style>
<style scoped>
@import 'https://fonts.googleapis.com/css?family=Open+Sans:300,400';
body,
.badgescard,
.firstinfo {
  display: flex;
  justify-content: center;
  align-items: center;
}

html {
  height: 100%;
}

.content {
  font-family: 'Open Sans', sans-serif;
  width: 100%;
  /* min-height: 100%; */
  background: #009688;
  font-size: 16px;
  /* overflow: hidden; */
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

.content {
  position: relative;
  animation: animatop 0.9s cubic-bezier(0.425, 1.14, 0.47, 1.125) forwards;
}

.card {
  width: 500px;
  min-height: 100px;
  padding: 20px;
  border-radius: 3px;
  background-color: white;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
}
.card:after {
  content: '';
  display: block;
  width: 190px;
  height: 300px;
  background: cadetblue;
  position: absolute;
  animation: rotatemagic 0.75s cubic-bezier(0.425, 1.04, 0.47, 1.105) 1s both;
}

.badgescard {
  font-size: 2.5rem;
  border-radius: 3px;
  background-color: #ececec;
  width: 480px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  position: absolute;
  z-index: -1;
  left: 10px;
  bottom: 10px;
  animation: animainfos 0.5s cubic-bezier(0.425, 1.04, 0.47, 1.105) 0.75s
    forwards;
}
.badgescard span {
  font-size: 1.6em;
  margin: 0px 6px;
  opacity: 0.6;
}

.firstinfo {
  flex-direction: row;
  z-index: 2;
  position: relative;
}
.firstinfo img {
  border-radius: 50%;
  width: 120px;
  height: 120px;
}
.firstinfo .profileinfo {
  padding: 0px 20px;
}
.firstinfo .profileinfo h1 {
  font-size: 1.8em;
}
.firstinfo .profileinfo h3 {
  font-size: 1.2em;
  color: #009688;
  font-style: italic;
}
.firstinfo .profileinfo p.bio {
  padding: 10px 0px;
  color: #5a5a5a;
  line-height: 1.2;
  font-style: initial;
}

@keyframes animatop {
  0% {
    opacity: 0;
    bottom: -500px;
  }
  100% {
    opacity: 1;
    bottom: 0px;
  }
}
@keyframes animainfos {
  0% {
    bottom: 10px;
  }
  100% {
    bottom: -42px;
  }
}
@keyframes rotatemagic {
  0% {
    opacity: 0;
    transform: rotate(0deg);
    top: -24px;
    left: -253px;
  }
  100% {
    transform: rotate(-30deg);
    top: -24px;
    left: -78px;
  }
}
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.buttons {
  margin: 10%;
  text-align: center;
}

.btn-hover {
  width: 100px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  margin: 20px;
  height: 30px;
  text-align: center;
  border: none;
  background-size: 300% 100%;

  border-radius: 50px;
  moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
}

.btn-hover:hover {
  background-position: 100% 0;
  moz-transition: all 0.4s ease-in-out;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;
}

.btn-hover:focus {
  outline: none;
}

.btn-hover.color-1 {
  background-image: linear-gradient(
    to right,
    #25aae1,
    #40e495,
    #30dd8a,
    #2bb673
  );
  box-shadow: 0 4px 15px 0 rgba(49, 196, 190, 0.75);
}
.btn-hover.color-2 {
  background-image: linear-gradient(
    to right,
    #f5ce62,
    #e43603,
    #fa7199,
    #e85a19
  );
  box-shadow: 0 4px 15px 0 rgba(229, 66, 10, 0.75);
}
.btn-hover.color-3 {
  background-image: linear-gradient(
    to right,
    #667eea,
    #764ba2,
    #6b8dd6,
    #8e37d7
  );
  box-shadow: 0 4px 15px 0 rgba(116, 79, 168, 0.75);
}
.btn-hover.color-4 {
  background-image: linear-gradient(
    to right,
    #fc6076,
    #ff9a44,
    #ef9d43,
    #e75516
  );
  box-shadow: 0 4px 15px 0 rgba(252, 104, 110, 0.75);
}
.btn-hover.color-5 {
  background-image: linear-gradient(
    to right,
    #0ba360,
    #3cba92,
    #30dd8a,
    #2bb673
  );
  box-shadow: 0 4px 15px 0 rgba(23, 168, 108, 0.75);
}
.btn-hover.color-6 {
  background-image: linear-gradient(
    to right,
    #009245,
    #fcee21,
    #00a8c5,
    #d9e021
  );
  box-shadow: 0 4px 15px 0 rgba(83, 176, 57, 0.75);
}
.btn-hover.color-7 {
  background-image: linear-gradient(
    to right,
    #6253e1,
    #852d91,
    #a3a1ff,
    #f24645
  );
  box-shadow: 0 4px 15px 0 rgba(126, 52, 161, 0.75);
}
.btn-hover.color-8 {
  background-image: linear-gradient(
    to right,
    #29323c,
    #485563,
    #2b5876,
    #4e4376
  );
  box-shadow: 0 4px 15px 0 rgba(45, 54, 65, 0.75);
}
.btn-hover.color-9 {
  background-image: linear-gradient(
    to right,
    #25aae1,
    #4481eb,
    #04befe,
    #3f86ed
  );
  box-shadow: 0 4px 15px 0 rgba(65, 132, 234, 0.75);
}
.btn-hover.color-10 {
  background-image: linear-gradient(
    to right,
    #ed6ea0,
    #ec8c69,
    #f7186a,
    #fbb03b
  );
  box-shadow: 0 4px 15px 0 rgba(236, 116, 149, 0.75);
}
.btn-hover.color-11 {
  background-image: linear-gradient(
    to right,
    #eb3941,
    #f15e64,
    #e14e53,
    #e2373f
  );
  box-shadow: 0 5px 15px rgba(242, 97, 103, 0.4);
}
</style>
