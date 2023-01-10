<template>

    <div class="service">
        <div class="service-icon">
            <!-- <icon :icon="['fas' , 'pen-alt']" /> -->
            <img src="https://i.ibb.co/s6Wsgvp/creative.png" alt="creative" border="0" />
        </div>

        <div class="service-header">
            <h1>
                Content Writing
            </h1>
        </div>

        <div class="service-information">
            <ul class="service-info-list">
            
                <li class="service-info-item">Content Writing Service 1</li>
                <li class="service-info-item">Content Writing Service 2</li>           
                <li class="service-info-item">Content Writing Service 3</li>           
                <li class="service-info-item">Content Writing Service 4</li>           

            </ul>
        </div>

    </div>
  

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .service{
        padding: 2em 4em;
        margin: 2em 4em;
    }

        .service-icon img{
            width: 100px;
            height: 100px;
            background-color: #fff;
            border-radius: 50%;

            padding: 10px;
        }

            .service-header h1{
                color: #fff;
                font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
            }

                .service-info-list{
                    width: 250px;
                    list-style-type: none;
                    color: #9f37cb;
                    background: rgba(255, 255, 255, 0.06);
                    border-radius: 10px;
                    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
                    backdrop-filter: blur(20px);
                    -webkit-backdrop-filter: blur(20px);
                    border: 1px solid rgba(255, 255, 255, 0.09);
                    
                    padding: 0;
                    margin: 0 auto;
                }

                    .service-info-item{
                        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
                        font-weight: 600;
                        font-size: 20px;
                        border-bottom: 1px solid #fff;
                     
                        padding: 15px 10px;
                        
                    }

                    .service-info-item:nth-of-type(4){
                        border: none;
                    }
</style>