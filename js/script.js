// https://script.google.com/macros/s/AKfycbyv8TVoRMkTZhyxuL7bdFKrfpO6i31-KAftbSWT_HkuQOi2XESdhs0bQ8ND9AD7Lcg/exec


const loadData = async () => {
    const res = await fetch('https://script.google.com/macros/s/AKfycbyv8TVoRMkTZhyxuL7bdFKrfpO6i31-KAftbSWT_HkuQOi2XESdhs0bQ8ND9AD7Lcg/exec');
    const data = await res.json();
    const allData = data.data;
    // console.log(allData);
    displayData(allData);
}

const displayData = dataList => {
    // console.log(dataList);

    const cuciContainer = document.getElementById('cuci-container');

    dataList.forEach(dataItem => {
        // console.log(dataItem);
        
        const cuciDiv = document.createElement('div');
        cuciDiv.classList = `overflow-x-auto`
        cuciDiv.innerHTML = `
        <table class="table text-center">
                    
                    <tbody>
                        <tr>
                            <td>${dataItem.platform}</td>
                            <td>${dataItem.amount}</td>
                            <td>${dataItem.game}</td>
                            <td>${dataItem.time}</td>
                            <td>${dataItem.company}</td>
                        </tr>
                    </tbody>
                </table>
        `
        cuciContainer.appendChild(cuciDiv);

    })
    
}

loadData();