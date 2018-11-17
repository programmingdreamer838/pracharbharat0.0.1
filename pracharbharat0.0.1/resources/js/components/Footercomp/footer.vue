<template>
<footer >
        <div class="row_flex">
         <div class="col_flex"><p class="heading">ABOUT &nbsp; PRACHARBHARAT</p>
         <hr class="request_quota"/>
         </div>
         <div class="col_flex ">
             <p class="heading">CONTACT &nbsp;INFO</p>
             <hr class="request_quota"/>

         </div>
         <div class="col_flex ">
             <p class="heading"> SERVICES</p>
             <hr class="request_quota"/>
             <div class="o_servicelink"><a  class='servicelink' href="#">Media Advertisement&nbsp;</a></div>
             <hr/>
             <div class="o_servicelink"><a  class='servicelink'  href="#">electronic  printing&nbsp;</a></div>
              <hr/>
             <div class="o_servicelink"><a  class='servicelink' href="#">Media Advertisement online&nbsp;</a></div>
             </div>
         <div class="col_flex ">
             <p class="heading">REQUEST &nbsp; A &nbsp; QUOTE</p>
             <hr class="request_quota"/>
             <form action="">
                <input class='pb_field' type="text" placeholder="name" name="name"/>
                <input class='pb_field' type="text" placeholder="contact no" name="contactno"/>
                <button class='pb_field'>submit</button>
                <input class='pb_field' display="none" type="text" placeholder="contact no" name="contactno"/>

             </form>
         </div>
       </div>
       <div class="row_flex  feedbacklink">footer line</div>
</footer>

</template>
<style scoped>
hr{
    color:white;
    height: 1px;
    width:100%;
}
.row_flex{
    width:100%;
    display:flex;
    flex-direction: row;
    /* justify-content: center; */
    flex-wrap: wrap;
    margin-top:48px;
}
.col_flex{
    width:25%;
    height:200px;
    min-width:300px;
    background:rgb(32, 32, 32);
    flex-grow:1;
    padding:6px;
    /* color:white; */
    position:relative;
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
}
.col_flex .pb_field{
    margin-top:10px;
    display:block;
}
.col_flex .heading{
    font-size: 16px;
    color:white;
    font-weight: bold;
}
.col_flex .request_quota{
    background:yellow;
    width:80%;
    height: 0.0001px;
    position: absolute;
    top:10px;

}
.box{
    height:200px;
    background:orange;
    border:1px solid blue;
}
.bordrbg{
    border:2px solid pink;
    height:auto;
    background:grey;
   /* // padding:0px -15px 0px -15px; */
}
.feedbacklink{
    background:cornflowerblue;
    height:100px;
    margin-top:0px;
    position:relative;

}
.servicelink{
    text-decoration: none;
    margin-top:8px;
    position:relative;
     transform:scale(1.3,1);
}
.servicelink:hover{
       color:white;


}
.o_servicelink:hover{
    transform: translateX(10px);
    transition:transform  0.8s;

}
.o_servicelink:hover::after{
    content:'\25BA';
    color:white;

}



</style>
<script>

</script>

