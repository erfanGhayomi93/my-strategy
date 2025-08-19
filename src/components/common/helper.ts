export const sepNumbers = (num: number | string | undefined): string => {
     if (typeof num === 'number') num = String(num);
     if (!num) return '−';

     try {
          if (num.length <= 3) return num;

          const objRegex = /(-?\d+)(\d{3})/;
          while (objRegex.test(num)) {
               num = num.replace(objRegex, '$1,$2');
          }

          return num;
     } catch (e) {
          // Handle potential errors if necessary
          console.error('Error in sepNumbers:', e);
     }

     return num;
};
