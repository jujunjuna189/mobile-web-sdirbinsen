import axios from "axios";
import { API_SATUAN_GET, API_SATUAN_LAMBANG_GET, API_SATUAN_PRESTASI_GET, API_SATUAN_TRADISI_GET } from "../config/api";
import { getLocalUser } from "../service/LocalStorage";

export const getSatuanRequest = async ({ filter = "" }) => {
    const user = getLocalUser();
    try {
        const response = await axios.get(`${API_SATUAN_GET}?${filter}`, {
            headers: {
                Authorization: `bearer ${user.token}`,
            }
        });
        return response.data.list_data.satuan;
    } catch (error) {
        console.error('Error fetching items:', error);
    }
}

export const getSatuanDetailRequest = async ({ id }) => {
    const user = getLocalUser();
    let append = `/${id}`;
    try {
        const response = await axios.get(`${API_SATUAN_GET}${append}`, {
            headers: {
                Authorization: `bearer ${user.token}`,
            }
        });
        return response.data.list_data.satuan;
    } catch (error) {
        console.error('Error fetching items:', error);
    }
}

export const getSatuanLambangRequest = async ({ filter = '', params = {} }) => {
    // const user = getLocalUser();
    try {
        const response = await axios.get(`${API_SATUAN_LAMBANG_GET}?satuan_id=${params?.satuan?.id}&${filter}`, {
            headers: {
                Authorization: `bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2JhY2tlbmQuc2RpcmJpbnNlbi5jb20vYXBpL3YxL2F1dGgvbG9naW4iLCJpYXQiOjE2ODk3NDA1OTMsImV4cCI6MTY4OTgyNjk5MywibmJmIjoxNjg5NzQwNTkzLCJqdGkiOiJnQkZIUDY4OXUzNjBqWkFUIiwic3ViIjoiNSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjciLCJ1c2VyIjp7InVzZXJfaWQiOjUsInJvbGVfaWQiOiIxIn19.NmhGNPK-EpJfPUZMxlhl8JUiB2u4_y9K5ozPiM3uxl4`,
            },
        });
        return response.data.list_data.satuan_lambang;
    } catch (error) {
        console.error("Error fetching items:", error);
    }
};

export const getSatuanTradisiRequest = async ({ filter = '', params = {} }) => {
    // const user = getLocalUser();
    try {
        const response = await axios.get(`${API_SATUAN_TRADISI_GET}?satuan_id=${params?.satuan?.id}&${filter}`, {
            headers: {
                Authorization: `bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2JhY2tlbmQuc2RpcmJpbnNlbi5jb20vYXBpL3YxL2F1dGgvbG9naW4iLCJpYXQiOjE2ODk3NDA1OTMsImV4cCI6MTY4OTgyNjk5MywibmJmIjoxNjg5NzQwNTkzLCJqdGkiOiJnQkZIUDY4OXUzNjBqWkFUIiwic3ViIjoiNSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjciLCJ1c2VyIjp7InVzZXJfaWQiOjUsInJvbGVfaWQiOiIxIn19.NmhGNPK-EpJfPUZMxlhl8JUiB2u4_y9K5ozPiM3uxl4`,
            },
        });
        return response.data.list_data.satuan_tradisi;
    } catch (error) {
        console.error("Error fetching items:", error);
    }
};

export const getSatuanPrestasiRequest = async ({ filter = '', params = {} }) => {
    // const user = getLocalUser();
    try {
        const response = await axios.get(`${API_SATUAN_PRESTASI_GET}?satuan_id=${params?.satuan?.id}&${filter}`, {
            headers: {
                Authorization: `bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2JhY2tlbmQuc2RpcmJpbnNlbi5jb20vYXBpL3YxL2F1dGgvbG9naW4iLCJpYXQiOjE2ODk3NDA1OTMsImV4cCI6MTY4OTgyNjk5MywibmJmIjoxNjg5NzQwNTkzLCJqdGkiOiJnQkZIUDY4OXUzNjBqWkFUIiwic3ViIjoiNSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjciLCJ1c2VyIjp7InVzZXJfaWQiOjUsInJvbGVfaWQiOiIxIn19.NmhGNPK-EpJfPUZMxlhl8JUiB2u4_y9K5ozPiM3uxl4`,
            },
        });
        return response.data.list_data.satuan;
    } catch (error) {
        console.error("Error fetching items:", error);
    }
};