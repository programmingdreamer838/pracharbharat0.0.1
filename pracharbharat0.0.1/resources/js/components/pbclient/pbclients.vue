<template>
    <div class=" client_container bordrblue">
        <div class="col-lg-12">
             <h1>our client</h1>
        </div>

         <div class="col-lg-12">
               <marquee behavior="stop" direction="left">
                   <div class="client_logo_box">first</div>
                   <div class="client_logo_box">first</div>
                   <div class="client_logo_box">first</div>
                   <div class="client_logo_box">first</div>
                   <div class="client_logo_box">first</div>
                   <div class="client_logo_box">first</div>


               </marquee>

         </div>
    </div>
</template>
<style scoped>
.bordrblue{
    border:2px  solid blue;
    height:200px;
}
h1{
    text-align: center;
}
.client_container{
 position:relative;
 margin-left:-15px;
 margin-right: -15px;
 background-color: rgb(223, 222, 222);
}
.client_logo_box{
    height: 50px;
    width:200px;
    background:lightgreen;
    margin-left:-40px;
    display:inline-block;
}
.marquee_container{
    display: flex;
    flex-direction: row;
    justify-content: center;
}
</style>

