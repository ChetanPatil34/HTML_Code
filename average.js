function calculateLove() {
    const name1 = document.getElementById('name1').value.trim().toLowerCase();
    const name2 = document.getElementById('name2').value.trim().toLowerCase();

    if (name1 === "" || name2 === "") {
        document.getElementById('result').innerHTML = "Please enter both names!";
        return;
    }

    const combinedLength = name1.length + name2.length;
    const lovePercentage = (combinedLength % 100) + 1;

    document.getElementById('result').innerHTML = `Love score: ${lovePercentage}% ❤️`;
}
