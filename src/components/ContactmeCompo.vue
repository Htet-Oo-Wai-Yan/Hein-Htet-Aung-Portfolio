<template>
  <div class="contact">
    <div class="contact-me">

        <div class="contact-text">
            <p>
                If you are interested and want to work together!
            </p>
        </div>

        <div class="contact-link">
            <a href="http://m.me/heinhtetaungb17" class="contact-me-link">
                Get in Touch
            </a>
        </div>

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .contact{
        background-color: #000;
        font-size: 40px;
        border-bottom-left-radius: 50% 20%;
        border-bottom-right-radius: 50% 20%;

        padding: 5px 10px;
        margin: 10px 20px;
    }

        .contact-text{  
            display: flex;
            justify-content: center;
            align-items: center;
        }

            p{
                width: 420px;

                font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
                font-weight: 600;
                color: #fff;
            }

            .contact-link{
                padding: 10px;
                margin: 5px;
            }

                .contact-me-link{
                    text-decoration: none;
                    color: #9f37cb;
                    font-weight: 300;

                    position: relative;
                }

                .contact-me-link::before{
                    content: '';
                    width: 100%;
                    height: 1px;
                    background-color: #9f37cb;

                    position: absolute;
                    bottom: -5px;
                    left: 0;
                }

</style>