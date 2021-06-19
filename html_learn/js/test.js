var getLeastNumbers = function(arr, k) {
    let resultArray = []
    const arrLength = arr.length
    if(k === 0){
        return []
    }
    if(k === arr.length){
        return arr
    }
    createHeap(arr)
    for(let i = 1; i <= k; i++){
        resultArray.push(arr[0])
        swap(arr, 0, arrLength - i)
        ajustTree(arr, 0, arrLength - i)
    }
    return resultArray
};

var createHeap = function(arr){
    const arrLength = arr.length
    for(let i = Math.floor(arrLength / 2); i >= 0; i --){
        ajustTree(arr, i, arrLength)
    }    
}

/**
 * 调整数组形式的完美二叉树，保证根节点最小
 */

var ajustTree = function(arr, treeRootI, treeLength){
    // 用 child 指向左孩子
    let child = treeRootI * 2 + 1
    // 保证孩子节点存在
    while(child < treeLength){
        // 比较孩子节点，child 取小的那个
        if(child + 1 < treeLength && arr[child] > arr[child + 1]){
            child = child + 1
        }
        // 如果根节点比孩子节点大互换，互换后根节点指向孩子节点，孩子节点指向孙子节点
        if(arr[treeRootI] > arr[child]){
            swap(arr, treeRootI, child)
            treeRootI = child
            child = 2 * treeRootI + 1
        }
        else{
            // 避免死循环
            break 
        }
    }
}

var swap = function(arr, i, j){
    if(i === j){
        return
    }
    arr[i] = arr[i] + arr[j]
    arr[j] = arr[i] - arr[j]
    arr[i] = arr[i] - arr[j]
}