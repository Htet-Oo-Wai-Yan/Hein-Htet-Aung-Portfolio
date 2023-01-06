<template>
    <div class="footer">
        <div class="contact">

            <div class="social-contact">
                <h3 class="social-contact-header">Social</h3>

                <ul class="social-contact-list">

                    <li class="social-contact-item">
                        <a href="" class="social-contact-link facebook-contact">
                            
                            Facebook
                        </a>
                    </li>

                    <li class="social-contact-item">
                        <a href="" class="social-contact-link linkedin-contact">
                            LinkedIn
                        </a>
                    </li>

                    <li class="social-contact-item">
                        <a href="" class="social-contact-link behance-conatct">
                            Behance
                        </a>
                    </li>

                    <li class="social-contact-item">
                        <a href="" class="social-contact-link dribbble-conatct">
                            Dribbble
                        </a>
                    </li>
                
                </ul>

            </div>

            <div class="other-contact">
                <h3 class="other-contact-header">Other</h3>

                <ul class="other-contact-list">

                    <li class="other-contact-item">
                        <a href="tel:09783742007" class="other-contact-link phone-contact">
                            +959783742007
                        </a>
                    </li>

                    <li class="other-contact-item">
                        <a href="mailto:htetoowaiyan002@gmail.com" class="other-contact-link mail-contact">
                            Htetoowaiyan002@gmail.com
                        </a>
                    </li>

                </ul>

            </div>

        </div>
    </div>
  
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.footer{
    width: 100%;
    background-color: #fff;
    border-top-left-radius: 50% 20%;
    border-top-right-radius: 50% 20%;


    padding: 5px;

        .contact{
            display: flex;
            justify-content: center;
        }

            .social-contact,.other-contact{
                padding: 5px;

                position: relative;
            }

            .social-contact::before{
                content: '';
                width: 3px;
                height: 80%;
                background-color: #000;

                position: absolute;
                top: 10%;
                right: -6%;
            }

                .social-contact-header,.other-contact-header{
                    font-size: 30px;
                    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
                    color: #000;
                }


                    .social-contact-list,.other-contact-list{
                        list-style-type: none;

                        padding: 15px;
                    }

                        .social-contact-item,.other-contact-item{
                            padding: 10px;
                            margin: 5px;
                        }

                        .social-contact-link,.other-contact-link{
                            text-decoration: none;
                            font-size: 19px;
                            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
                            color: #000;

                            position: relative;
                        }

                        .social-contact-link::before,.other-contact-link::before{
                            content: '';
                            width: 100%;
                            height: 2px;
                            background-color: #000;

                            position: absolute;
                            bottom: -5px;
                            left: 0;
                            
                        }
}

</style>>
