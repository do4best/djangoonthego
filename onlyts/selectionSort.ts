function selectionSort(arr:number[]):number[]{
    let n:number = arr.length;
    for(let i=0; i<n-1; i++){
        let min_value:number = i;
        for(let j=i+1; j<n; j++){
            if(arr[j]! < arr[min_value]!){
                min_value = i;
            }
            
        }
        if(min_value !== i){
            [arr[i], arr[min_index]] = [arr[min_index]!, arr[i]!];
        }

    }
    return arr;

}
function selectionSort(arr: number[]): number[] {
    let n: number = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let min_index: number = i;

        for (let j = i + 1; j < n; j++) {
            if (arr[j]! < arr[min_index]!) {
                min_index = j;
            }
        }

        // Swap safely in place
        if (min_index !== i) {
            [arr[i], arr[min_index]] = [arr[min_index]!, arr[i]!];
        }
    }

    return arr;
}
function selectionSort(arr: number[]): number[] {
    const n: number = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let min_index: number = i;

        for (let j = i + 1; j < n; j++) {
            // Explicit bounds check convinces TypeScript
            if (j < arr.length && arr[j]! < arr[min_index]!) {
                min_index = j;
            }
        }

        if (min_index !== i) {
            // Swap safely
            const temp: number = arr[i]!;
            arr[i] = arr[min_index]!;
            arr[min_index] = temp;
        }
    }

    return arr;
}
function selectionSort(arr: number[]): number[] {
    const n: number = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let min_index: number = i;

        for (let j = i + 1; j < n; j++) {
            if (arr[j]! < arr[min_index]!) {
                min_index = j;
            }
        }

        if (min_index !== i) {
            [arr[i], arr[min_index]] = [arr[min_index]!, arr[i]!];
        }
    }

    return arr;
}