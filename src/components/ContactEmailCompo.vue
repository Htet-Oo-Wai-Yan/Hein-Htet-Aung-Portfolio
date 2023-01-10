<template>
    <div class="contact-email">
        <div class="contact-form-main">
            <form action="https://formspree.io/f/mayzykqq" method="POST" class="contact-form">  
                
                <div class="form-detail">
                    <input type="text" id="cliname" name="cliname" placeholder="Name#" required/>
                    <label for="cliname">Please enter your name</label>
                </div>

                <div class="form-detail">
                    <input type="text" id="clicompany" name="clicompany" placeholder="Company Name#" required />
                    <label for="clicompany">Please enter your company name</label>
                </div>
                
                <div class="form-detail">
                    <input type="email" id="cliemail" name="cliemail" placeholder="Email#" required/>
                    <label for="cliemail">Please enter your email</label>
                </div>

                <div class="form-detail">
                    <input type="number" id="clinumber" name="clinumber" placeholder="Phone Number#" required/>
                    <label for="clinumber">Please enter your number</label>
                </div>

                <div class="form-detail">
                    <select id="cliservice" name="cliservice" required>
                      
                        <option>
                            <input type="radio" id="cliservice-content" name="cliservice-content" value="Content Writing"/>
                            <label for="cliservice-content">Content Writing</label>
                        </option>

                        <option>
                            <input type="radio" id="cliservice-design" name="cliservice-design" value="Graphic Design"/>
                            <label for="cliservice-design">Graphic Design</label>
                        </option>

                        <option>
                            <input type="radio" id="cliservice-marketing" name="cliservice-marketing" value="Digital Marketing"/>
                            <label for="cliservice-marketing">Digital Marketing</label>
                        </option>

                    </select>
                </div>

                <div class="form-detail">
                    <textarea id="climessage" name="climessage" rows="1" placeholder="Please let me know a bit about your project so i can help you better price and timeframe" required></textarea>
                </div>

                <button type="submit" value="submit" id="submit-btn">Submit</button>

            </form>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>
<!-- 
name
companyname
company email
contact ph number
interested service
little detail about project -->
