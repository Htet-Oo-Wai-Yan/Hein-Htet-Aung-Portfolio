<template>
  
  <div class="testimonial">
    
    <div class="testimonial-header">
        <p>
            Here are feedbacks from my customers
        </p>
    </div>

   <div class="testimonial-body">
            <div class="left-testimonial arrows">
                <icon :icon="['fas','arrow-left']" class="fa-2x" />
            </div>
            
            <div class="testimonial-about">
                    <div class="testimonial-text">
                        <p>
                            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem rerum mollitia maiores molestias assumenda harum est ullam ex quibusdam et? Quis excepturi voluptates nisi quo impedit perferendis, necessitatibus optio praesentium non tempora ipsum minima soluta est harum! Nam aliquam est hic aut eius soluta nihil veniam laudantium, voluptates totam culpa, architecto ipsa vitae a dolor, minus quos? Nemo dolor labore saepe asperiores in quis, repudiandae tempora laboriosam fugit perspiciatis incidunt obcaecati quibusdam facere nulla doloribus magni quisquam? Incidunt maiores, quam pariatur, adipisci itaque velit autem sed aut corrupti dolor et. Molestiae voluptatibus eius tenetur, unde ratione aspernatur quibusdam mollitia magnam?"
                        </p>
                    </div>

                    <div class="testimonial-details">
                        
                        <span class="client-name">
                            | Jonh Doe,Marketing Manager from Xyz |
                        </span>

                    </div>
            </div>

            <div class="right-testimonial arrows">
                <icon :icon="['fas','arrow-right']" class="fa-2x" />
            </div>
   </div>

  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

    .testimonial{

        padding: 20px 10px;
        margin: 50px 20px;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

        .testimonial-header p{
            font-size: 40px;
            font-weight: 600;
            font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
            color: #fff;
        }

        .testimonial-body{
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .testimonial-body > div{
            margin: 10px;
            padding: 10px;
        }

                .arrows{
                    color: #9f37cb;
                    cursor: pointer;
                }

                    .testimonial-about{
                        margin: 10px auto;
                    }

                        .testimonial-text p{
                            font-size: 20px;
                            text-align: justify;
                            color: #fff;
                            font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

                        }

                            .testimonial-details{
                                font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
                                font-weight: 600;
                                color: #9f37cb;

                                padding: 10px;
                            }



</style>