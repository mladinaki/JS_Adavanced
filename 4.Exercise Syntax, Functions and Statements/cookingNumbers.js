function cookingNumbers(...input) {
    let num = Number(input[0]);

    for (const el of input) {

        switch (el) {
            case 'chop':
                num /= 2;
                console.log(num);

                break;
            case 'dice':
                num = Math.sqrt(num);
                console.log(num);
                break;

            case 'spice':
                num += 1;
                console.log(num);
                break;

            case 'bake':
                num *= 3;
                console.log(num);
                break;

            case 'fillet':
                num = num -num * 0.2;
                console.log(num);
                break;
        }
    }
}
cookingNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');