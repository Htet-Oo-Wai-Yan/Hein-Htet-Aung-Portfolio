<template>
    <div class="partner">

        <div class="partner-description">
            <p class="text1">
                Clients & Collaboratiom
            </p>
            <h1 class="text2">Awsome Client i Have Worked With</h1>
            <p class="text3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam nisi alias aut et nihil. Quod voluptatibus autem consequuntur corrupti iusto? Exercitationem molestias error eaque nesciunt commodi dicta est nostrum dignissimos.
            </p>
        </div>

        <div class="partner-showcase">
            
            <div class="partner-card c-1">
                <img src="../assets/logo.png" alt="partner1">
            </div>

            <div class="partner-card c-1">
                <img src="../assets/logo.png" alt="partner1">
            </div>

            <div class="partner-card c-1">
                <img src="../assets/logo.png" alt="partner1">
            </div>

            <div class="partner-card c-1">
                <img src="../assets/logo.png" alt="partner1">
            </div>

            <div class="partner-card c-1">
                <img src="../assets/logo.png" alt="partner1">
            </div>

            <div class="partner-card c-1">
                <img src="../assets/logo.png" alt="partner1">
            </div>
        
        </div>

        

    </div>
  
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

    .partner{
        padding: 20px 10px;
        margin: 50px 20px;
    }

        .partner-description{
            background: rgba(255, 255, 255, 0.06);
            border-radius: 16px;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.09);
            color: #fff;
            text-align: left;

            padding: 20px;
            margin: 10px;
        }

           .text1{
                // text-align: right;
                color: #9f37cb;
                font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
                font-size: 20px;
                font-weight: 600;
           }

           .text2{
                font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
           }

           .text3{
            font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
           }

        .partner-showcase{
            margin: 10px;
        }


           .partner-card{
            border-radius: 5px;
            box-shadow: 0px 1px 10px -5px rgba(55,55,55,0.92);
            background: #fff;
            
            display: flex;
            justify-content: center;
            
            margin-bottom: -3px;
            padding: 5px;

           }

            .partner-card img{
                width: 80px;
                border-radius: 50%;
            }



</style>