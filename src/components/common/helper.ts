import dayjs from '@/lib/dayjs';


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

export const dateFormatter = (v: string | number, format: 'date' | 'time' | 'datetime' | 'datetimeSec') => {
     const formats: Record<typeof format, string> = {
          time: 'HH:mm',
          date: 'YYYY/MM/DD',
          datetime: 'YYYY/MM/DD HH:mm',
          datetimeSec: 'YYYY/MM/DD HH:mm:ss',
     };

     if (!v || v === '0001-01-01T00:00:00') return '-';

     const d = dayjs(v ?? new Date()).calendar('jalali');
     if (d.isValid()) return d.format(formats[format]);

     return '-';
};