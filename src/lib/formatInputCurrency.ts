export const toCurrency = (input: string | number) => {
  const inputString = String(input);
  const hasComma = inputString.indexOf(",") > -1;
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  });
  if (input !== null && input !== "" && input !== undefined) {
    const replaceComma = inputString.replace(/,/g, ",");
    const toFloat = parseFloat(replaceComma.replace(/[^0-9]+/g, ""));
    const res = hasComma ? toFloat / 100 : toFloat;
    if (!isNaN(res)) {
      return formatter.format(res);
    } else return formatter.format(0);
  } else return formatter.format(0);
};

export const toNumber = (input: string) => {
  const hasComma = input.indexOf(",") > -1;
  const filter = Number(input.replace(/[^0-9-]+/g, ""));
  const res = hasComma ? filter / 100 : filter;
  return Number(res);
};

// function formatNumber(n: string) {
//   // format number 1000000 to 1,234,567
//   return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
// }

// export function formatCurrencyUp(input: HTMLInputElement, blur: string) {
//   // appends $ to value, validates decimal side
//   // and puts cursor back in right position.

//   // get input value
//   let input_val = input.value;

//   // don't validate empty input
//   if (input_val === "") {
//     return;
//   }

//   // original length
//   var original_len = input_val.length;

//   // initial caret position
//   var caret_pos = input.prop("selectionStart");

//   // check for decimal
//   if (input_val.indexOf(".") >= 0) {
//     // get position of first decimal
//     // this prevents multiple decimals from
//     // being entered
//     var decimal_pos = input_val.indexOf(".");

//     // split number by decimal point
//     var left_side = input_val.substring(0, decimal_pos);
//     var right_side = input_val.substring(decimal_pos);

//     // add commas to left side of number
//     left_side = formatNumber(left_side);

//     // validate right side
//     right_side = formatNumber(right_side);

//     // On blur make sure 2 numbers after decimal
//     if (blur === "blur") {
//       right_side += "00";
//     }

//     // Limit decimal to only 2 digits
//     right_side = right_side.substring(0, 2);

//     // join number by .
//     input_val = "R$" + left_side + "." + right_side;
//   } else {
//     // no decimal entered
//     // add commas to number
//     // remove all non-digits
//     input_val = formatNumber(input_val);
//     input_val = "R$" + input_val;

//     // final formatting
//     if (blur === "blur") {
//       input_val += ".00";
//     }
//   }

//   // send updated string to input
//   input.value = input_val;

//   // put caret back in the right position
//   var updated_len = input_val.length;
//   caret_pos = updated_len - original_len + caret_pos;
//   input[0].setSelectionRange(caret_pos, caret_pos);
//   return input;
// }
