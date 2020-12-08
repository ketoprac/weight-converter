document.querySelector("#output").style.visibility = "hidden";
document.querySelector(".lbsInput").addEventListener("input", function (e) {
  let lbs = e.target.value;
  // console.log(lbs);
  document.querySelector("#output").style.visibility = "visible";
  document.querySelector("#gramsOutput").innerHTML = (lbs / 0.0022046).toFixed(
    2
  );
  document.querySelector("#kilogramsOutput").innerHTML = (lbs / 2.205).toFixed(
    2
  );
  document.querySelector("#ouncesOutput").innerHTML = lbs * 16;
});
