function calculate()
{
    let s = document.getElementById("i1").value;
    document.getElementById("i2").innerHTML = s.split(/\s+/).filter(word => word !== '').length;

}
export default calculate;