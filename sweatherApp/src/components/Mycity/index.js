
export default function mochaString (stringg,partedelstring) {

  const string = stringg
  const hola = partedelstring;
  
  let final;
  
  const oneOption = string.includes(hola.oneOption);
  const twoOption = string.includes(hola.twoOption);
  const thirdOption = string.includes(hola.thirdOption);
  const fourOption = string.includes(hola.fourOption);
  const fiveOption = string.includes(hola.fiveOption);
  const sixOption = string.includes(hola.sixOption);
  const sevenOption = string.includes(hola.sevenOption);
  const eightOption = string.includes(hola.eightOption);


    if (oneOption) {
      final = string.replace(hola.oneOption, "");
    }
    
    else if (twoOption) {
    final = string.replace(hola.twoOption, "");
    } else if (thirdOption) {
    final = string.replace(hola.thirdOption, "");
    } else if (fourOption) {
      final = string.replace(hola.fourOption, "");
    } else if (fiveOption) {
      final = string.replace(hola.fiveOption, "");
    } else if (sixOption) {
      final = string.replace(hola.sixOption, "");
    } else if (sevenOption) {
      final = string.replace(hola.sevenOption, "");
    } else if (eightOption) {
      final = string.replace(hola.eightOption, "");
    }
   return final;
}

