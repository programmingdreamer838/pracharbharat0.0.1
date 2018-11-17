<template>
<div>

   <div class='pbcontainer bordg'>
   <div class='upper_tag'><img src="https://image.dhgate.com/0x0/f2/albu/g5/M01/07/C7/rBVaI1gsDBOAQ6boAAE2qcEEbLM863.jpg"></div>
   <div class='p_image'>
        <img src="" alt='pracharbharatimage' class='p_ilmage'>
   </div>
   <div class='p_desc'>
     <p class='p_title'>why to  prefer the<br>pracharbharat</p>
     <p class='p_about'>prachar bharat is a creatve company
                             dedicated in the field of offline and
                             online media advertisement.we are also
                             involved in various kind of promotion.
                             we belive in giving our customer........
    </p>
    <a href="#">Read more<span></span></a>
  </div>


</div>

</div>

</template>
<style scoped>
  .bordg{
  border:2px solid orange;
}

.pbcontainer{
  width:350px;
  height:480px;
  position:relative;
  margin-top:50px;
  box-sizing:border-box;
  box-shadow:1px 1px  1px 1px lightgrey;
  background:white;
}
.upper_tag{
  width:80px;
  height:80px;
  border:2px solid orange;
  position:absolute;
  left:38%;
  transform:translatey(-36px);
  background:white;
  box-sizing:border-box;
  border-radius:10%;



}
.p_image{
  position:relative;
  left:5%;
  margin-top:18%;
  border:2px solid orange;
  box-sizing:border-box;
  object-fit:contain;
  height:20%;
  width:90%;

}
.p_title{
  font-size:32px;
  text-align:center;
  color:orange;

}
.p_desc{
  width:90%;
  height:60%;
  margin:2% auto;
  /* //border:2px solid green; */
  font-family:Georgia, serif;
  position:relative;
  display:flex;
  padding:0px 16px;
  box-sizing:border-box;
  flex-direction:column;

}
.p_about{
  margin-top:-6px;
  font-size:16px;
  color:grey;
}
.p_desc a{
  text-decoration:none;
  color:white;
  width:95px;
  height:30px;
  background:orange;
  text-align:center;
  padding-top:4px;
  box-sizing:border-box;
  box-shadow:2px 2px 1px 1px grey;

  }
  .in-view{
      animation:ani 0.4s ease-in forwards;
      animation-delay: -0.01s;
  }
  @keyframes ani {
      from{
          transform: scale(0.5,0.5)
      }
      to{
          transform: scale(1.0,1.0)
      }
  }
.upper_tag img{
    width: 100%;
    height: 100%;
    object-fit: fill;
    border-radius:10%;
}

</style>
