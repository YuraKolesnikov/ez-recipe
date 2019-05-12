<template>
  <footer class="footer">
    <div class="container">
      <div class="line"></div>
      <div class="footer__main">
        <div style="margin: 15px;">
          <span class="footer__copyright">Copyright EZSoftware. All Rights Reserved.</span>
        </div>
        <div style="margin: 15px;">
          <ul class="footer__links">
            <li class="footer__item">
              <a href="#" class="footer__link">Imprint</a>
            </li>
            <li class="footer__item">
              <a href="#" class="footer__link">Terms</a>
            </li>
            <li class="footer__item">
              <a href="#" class="footer__link">FAQ</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "Footer"
};
</script>
<style lang="scss">
.footer {
  &__main {
    display: flex;
    padding: 20px 0 50px;
    margin: 0 -15px;
    align-items: center;
    justify-content: space-between;
  }

  &__copyright {
    font-size: 14px;
    line-height: 20px;
    color: #bfbfc5;
  }

  &__links {
    display: flex;
  }

  &__item {
    margin-left: 40px;
  }

  &__link {
    color: #f03360;
  }
}

.line {
  border-top: 1px solid #bfbfc5;
  height: 0;
}
</style>
