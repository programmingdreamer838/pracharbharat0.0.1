<template>


            <div class="col-lg-12 col-xs-12 cur_flex_box bordrbg">
                    <h3 class="">current project</h3>
                    <marquee class="scroll" behavior="scroll" direction="left">
                        <div class="marquee_flex_box">
                            <div v-for="items in 5" class="box bordrbg">box</div>
                            <!-- <div class="box bordrbg"></div>
                            <div class="box bordrbg"></div>
                            <div class="box bordrbg"></div> -->
                        </div>


                   </marquee>
            </div>



</template>
<style scoped>
.bordrbg{
    /* border:3px solid red; */
}
.box{
    width: 100px;
    height: 100px;
    margin-left:24px;
    min-width:100px;
    background:lightcoral;

}
.cur_flex_box{
    position:relative;
    display:flex;
    flex-direction: column;
    height:auto;
    margin:48px 0px 24px 0px;
    align-items: center;
    justify-content: center;
    padding: 0px 0px 20px;
    margin-left:-15px;
    width:102.5%;
    background-color:#F8FAFC;
    color:orange;



}
.marquee_flex_box{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    height:auto;
}
</style>
<script>

</script>
