export const getColumnTableGenerator = ({ data = [], columnKey = '' }) => {
    // Temukan objek "Letnan"
    const letnanObj = data.find(item => item.content === columnKey);
    if (!letnanObj) return []; // Jika tidak ditemukan "Letnan", kembalikan array kosong

    const letnanRow = letnanObj.row;
    const letnanColStart = letnanObj.col;
    const letnanColEnd = letnanColStart + letnanObj.colSpan - 1;

    // Filter data setelah "Letnan"
    const result = [];
    const isValidContent = content =>
        typeof content === "string" && /^[a-zA-Z%]+$/.test(content); // Ubah validasi di sini

    for (const obj of data) {
        if (
            obj.row >= letnanRow && // Baris setelah atau sama dengan "Letnan"
            obj.col >= letnanColStart && // Kolom dalam cakupan "Letnan"
            obj.col <= letnanColEnd &&
            isValidContent(obj.content) // Konten sesuai validasi
        ) {
            result.push(obj);
        } else if (obj.row > letnanRow && !isValidContent(obj.content)) {
            // Berhenti jika bertemu objek tidak relevan
            break;
        }
    }

    return result;
}

export const countColumnsWithKey = (data, columnKey) => {
    // eslint-disable-next-line eqeqeq
    return Object.keys(data).filter(key => key.split('-')[1] == columnKey);
}