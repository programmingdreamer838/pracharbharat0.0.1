<template>
<div class="container-fluid">
    <div class="row">
        <div class="col-lg-12" id="pbimage">
           <img src="https://images.unsplash.com/photo-1494441069378-faab976e3c4e?ixlib=rb-0.3.5&s=b1cd5c67eefe120f439bb761c1105391&auto=format&fit=crop&w=500&q=60"/>
            <div class="overlaybox">
            <div class="overlaycommon overlay_width_first">first overlay</div>
            <div class="overlaycommon overlay_width_second">first overlay</div>
            <div class="overlaycommon overlay_width_third">first overlay</div>
            <div class="overlaycommon overlay_width_fourth">first overlay</div>
            <div class="overlaycommon overlay_width_fifth">nothing is here</div>

            </div>

        </div>
    </div>
</div>




</template>
<style scoped>
.overlaybox{
    /* border:2px blue solid; */
    width:50%;
    min-width: 300px;
    top:20%;
    /* background:yellow; */
    height:400px;
    position: absolute;
    right:0px;
    display:flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-end;

}
#pbimage{
    display:flex;
    /* border:2px solid red; */
    width:100%;
    height:100vh;
    position: absolute;
    top:0px;
    right:0px;
    background-image: url()


}
img{
    height:100%;
    width:100%;
    object-fit: fill;
    position:absolute;
    top:0px;
    right:0px;




}
.overlaycommon{

    height: 50px;
    background:orange;
    /* opacity: 0.8; */
    border-radius:16px 0 0 16px;
    margin-top:10px;
    position:relative;
    right:0px;
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    margin-right:-550px;
    color:white;
}
.overlay_width_first{
  width:60%;
  background:brown;
}
.overlay_width_second{
  width:68%;
  background:black;
}
.overlay_width_third{
  width:76%;
background:brown;
}
.overlay_width_fourth{
  width:79%;
  background:black;
}
.overlay_width_fifth{
  width:82%;
  background:brown;
}
.overlay_width_sixth{
    display: none;
    width:200px;
}
</style>
<script>
export default{

}

</script>
