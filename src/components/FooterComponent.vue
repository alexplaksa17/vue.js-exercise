<template>
  <footer>
            <div class="copyright">
              <span class="copyright__text">© 2017 Something.</span>
            </div>
            <div class="navigation">
              <ul class="navigation__list">
                <li class="navigation__list__item">Terms</li>

                <li class="navigation__list__item">Privacy</li>

              </ul>
            </div>

  </footer>
</template>
<script>


export default {

}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto');
@import url('https://fonts.googleapis.com/css?family=Roboto:500');



footer{
  background: linear-gradient( 137.149deg, rgb(33, 64, 101) 43%,rgb(19, 14, 70) 57%);
  display:flex;
  flex-direction: row;
  padding-left: 10%;
  padding-right: 10%;
  justify-content: space-between;
  align-items:center;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  .copyright{
    display:flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items:center;
    .copyright__text{
      opacity: 0.6;
      color: #ffffff;
      font-size: 14px;

    }
  }
}
.navigation{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items:center;
  .navigation__list{
    padding-left: 0;
    list-style-type: none;
    display: flex;
    .navigation__list__item{
      margin-right: 40px;
      list-style-type: none;


      a{
        opacity: 0.6;
        color: #ffffff;
        font-size: 14px;
        text-align: center;
        text-decoration: none;
        &:hover {

        }
        &:active {

        }
      }

    }

  }
}
</style>
