<template>
<div class="p_services">
    <div class="container-fluid">
        <div class="row pb_centering_content">
            <div class="col-xs-8 line"><hr></div>
            <div class="pimg"><i class="fa fa-star" aria-hidden="true"></i></div>
             <p class='ourservices'>Our services</p>
        </div>

    </div>
    <div class="container-fluid">
        <div class="row pb_centering_content">
            <div class="flex_box bordrbg" >

              <div class="box">first</div>
              <div class="box">second</div>
              <div class="box">third</div>



            </div>
        </div>

    </div>



</div>

</template>
<style scoped>
.ourservices{
    position: absolute;
    top:36px;
    font-size: 27px;
    color:#8E2DE2;
}
.pimg i{
    transform: scale(4,4);
    color:#8E2DE2;
}
.flex_box{
    width:90%;
    height:auto;
    display:flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin-top:48px;

}
.p_services{
    height:auto;
    margin-top:24px;
    /* border:2px solid brown; */
    box-sizing: border-box;
    position:relative;
    margin-bottom: 10px;
    margin-left:-15px;
    margin-right: -15px;
    background-color:#F8FAFC;


}
.bordrbg{
    border:1px solid grey;

}
.box{
    height: 200px;
    width:200px;

    background: #8E2DE2;
    margin:10px 10px 20px 0;
}


hr{
  height: 1px;
  color:rgb(224, 223, 223);
  background-color: grey;
  border: none;


}
 .line{
    position: absolute;
    top:-10px;

}

.pb_centering_content{
    display:flex;
    justify-content:space-evenly;
    position:relative;
    height: auto;
    /* border:2px solid blue; */

}
.service{

    display:flex;
}
.pimg{
    position:absolute;
    left:50%;

}

.box:hover{
    transform:scale(1.1,1.1);
    background:orange;
    opacity:0.8;
    transition:transform 0.5s
}
</style>
<script>
    export default{

    }
</script>
