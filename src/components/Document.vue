<template>
  <v-container class="pa-0" fluid>
    <template>
      <v-expansion-panels>
        <v-expansion-panel>
          <v-expansion-panel-header><strong>P2R Là gì ?</strong></v-expansion-panel-header>
          <v-expansion-panel-content class="content">
            <strong>P2R</strong> viết tắt từ Pleaseee Review Pullll !!! , ứng
            dụng này mình xây dựng với mục đích post message review pull lên
            chatwork 1 cách tiện nhất
          </v-expansion-panel-content>
        </v-expansion-panel>
        <v-expansion-panel>
          <v-expansion-panel-header><strong>Hướng dẫn sử dụng</strong></v-expansion-panel-header>
          <v-expansion-panel-content class="content">
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>- Đầu tiên chúng ta sẽ cần phải add API BOT tại phần <router-link class="link" to="/bot">Quản lý BOT</router-link></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content two-line>
                <v-list-item-title>- Sau đó chúng ta sẽ tạo template message tại phần <router-link class="link" to="/">Quản lý Message</router-link></v-list-item-title>
                <v-list-item-subtitle>Điền và chọn đủ thông tin , lưu ý phần nội dung message sẽ chứa 2 params {url} {title} tượng trưng cho url pull và title pull</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
             <v-list-item>
              <v-list-item-content two-line>
                <v-list-item-title>- Template mẫu</v-list-item-title>
                <v-list-item-subtitle><pre>[info][title]Mọi người review giúp mình pull này với(bow)[/title](*) Title:  {title}
(*) Link: {url}
[/info]</pre></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-content two-line>
                <v-list-item-title>- Cuối cùng việc gửi review pull chúng ta chỉ cần vào trang url của pull, bôi đen phần title pull hoặc title tùy ý bạn > Chuột phải > send PR to dự án ........</v-list-item-title>
                <v-list-item-subtitle><img src="https://i.ibb.co/r257NBS/new.png"/></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </template>
  </v-container>
</template>
<style scoped>
.content {
  font-size: medium;
}
.link {
  text-decoration: none;
  font-weight: bold;
  color: rgb(20, 49, 216);
}
</style>
