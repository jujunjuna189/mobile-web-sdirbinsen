const REACT_APP_API_URL = `${process.env.REACT_APP_ENV}/api/v1/`;

export const API_AUTH_LOGIN = `${REACT_APP_API_URL}auth/login`;

export const API_SATUAN_GET = `${REACT_APP_API_URL}searcher/satuan`;
// Lambang Satuan
export const API_SATUAN_LAMBANG_GET = `${REACT_APP_API_URL}admin/satuan/lambang`;
// Tradisi Satuan
export const API_SATUAN_TRADISI_GET = `${REACT_APP_API_URL}admin/satuan/tradisi`;
// Prestasi Satuan
export const API_SATUAN_PRESTASI_GET = `${REACT_APP_API_URL}admin/satuan-prestasi`;
// Peta Jabatan
export const API_PETA_JABATAN_GET = `${REACT_APP_API_URL}admin/peta-jabatan`;
// Material
export const API_MATERIAL_GET = `${REACT_APP_API_URL}searcher/material`;
export const API_PERSONIL_GET = `${REACT_APP_API_URL}searcher/personil`;
// Binsiapsat
export const API_BINSAT_RENLAKGIAT_GET = `${REACT_APP_API_URL}searcher/binsiapsat/binsat/renlakgiat`;
export const API_BINSAT_LAPLAKGIAT_GET = `${REACT_APP_API_URL}searcher/binsiapsat/binsat/laplakgiat`;
export const API_LAPSAT_INDUK_GET = `${REACT_APP_API_URL}searcher/binsiapsat/lapsat/induk`;
export const API_LAPSAT_LAMPIRAN_GET = `${REACT_APP_API_URL}searcher/binsiapsat/lapsat/lampiran`;
// Learning
export const API_LEARNING_GET = `${REACT_APP_API_URL}admin/learning`;