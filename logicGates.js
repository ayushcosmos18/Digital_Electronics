function gateOutput()
{
    var i1=document.getElementById("input1").value;
    var i2=document.getElementById("input2").value;
    var i3=document.getElementById("input3").value;
    var gt=document.getElementById("gateType").value;
    var gt2=document.getElementById("gateType2").value;
    document.getElementById("output").value=i1^i2;
    document.getElementById("output2").value=i1&i2;
    var ixor1=i1^i2;
    var xor2=ixor1^i3;
    var and1=i1&i2;
    var and2=ixor1&i3;
    document.getElementById("output3").value=xor2;
    document.getElementById("output4").value=and2;

    document.getElementById("output5").value=and1|and2;
}