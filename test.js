var arr = [];
list.forEach(ele => {
    this.temp.receiptLineList.forEach(item => {
        if (ele.id === item.contractCollectionId) {
            arr.push(item);
        }

    })
});
console.log(arr);