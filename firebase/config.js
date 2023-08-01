const firebaseConfig = {
    apiKey: "AIzaSyDEQTLXNPWCFnDbTHnitt4WyG8QdU-yKlg",
    authDomain: "itis-database.firebaseapp.com",
    projectId: "itis-database",
    storageBucket: "itis-database.appspot.com",
    messagingSenderId: "1055067486212",
    appId: "1:1055067486212:web:047b28d2a4f2d8b307dd51"
};

const serviceAccount = {
    "type": "service_account",
    "project_id": "itis-database",
    "private_key_id": "900220be9212396eb1eaf8bb416533ab2e06447b",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCsK1BFBn2lMFSV\nVFEtdizl9ZdvmLqXp9uKgwaVOYPDjSWxosxGvDmCKOc8ajeF8WMiX1P5EuXshQIe\na+5y0Z0JyknekTW/iZRLWcn/faXlFkrRWwCZjsvsTdPcGlceyIwN8Xx40/wGR0Js\nwMvaAcAWH9e3SaKKUt9SU84Ud0O/Ib13Mal5HtGAMmkxhXExXpKXSDNEi7Jk3ADy\n3EaYstklVjjuuWhJJ7tpfAHrJuRCdHm9SRK/J/qnDMlNY4O8KHhdbTkkAJ8zcQDE\nHeU0/IFEfn1RPBeC8UQMJz1JLKcoQXsz9EDhFxAyU+tg2krOYBDePpjWXeI1+pT5\nkBaQq1XjAgMBAAECggEACi7vACuCclXUeuyndzKT30TSdeBTu7VK+qYF//zh5UbL\noaEecgSfZip4hY3xcMkL8wmDvv9g0seJ44traXvVIlzGV8AWV248yOQrsCKaFbMR\ng9Eyd41cVG1vXYe/+sB5QDiLWIjj/D8UwmKjlrvJxRqRuMlF2uah8jhQv8x6GQDo\nt0j+JN/V5raDj6HBrVPXZbkdUuydqpZOYcScOQW+OZ3yN0XSfpY1hg0eY/UwYtc0\nTGrKxPbehuzT8VH7x7uum9xmPOCbxqM5zKw7bCBeUIVBUv4TsZYTTioYwGDmsWr9\n5sqT9uUPUmhwP3A6PJv1qDZ74h+K045wn7VCKqWyGQKBgQDUozK8m2FwGQ1y6uLS\nbrY4JZf6a726q1WbdVt4xSsIR4S3AZRYoi8KstJjVpABYSvcHEbqr+DOFLJRJjJ6\nectzQb+FT2npXeR8N0gKs0W5lqP1VatAyTCECWOdt0P0bOFFn4o89PuK9XW8JCxx\nDeghFuNjN0X5lt0AC8E+EuFUrQKBgQDPR3TCbp1jFXH+IBFftPmJbbbNFg0hcyBR\n5JhLIb+Pkkb8IhuWqJ677GZyorTCKlS21n8NG9PrtdEARwdQKa1ex25AdYrvCDmP\n+2jEqs5IpODcA/h6pD0R4wP5wGzjGPSxtWdB+GlkNT6xvmXXq9m6GO478YHouZ/v\ntGGkkRUWzwKBgQDA7vLyPunCFHkndAgqd1nOyA2Fooyb+ynJzEoa4ouRD5NTmZNI\neJ/GTUqn57ryBYEOTnnqJ3sKgazqBIZ4qln3Ugi8pLmsjQzryB0N2GvDYPOTfw/L\n0MC8jOheChMWjFQ6H/AGLyKtitoww4GvcrbUjzfypgxP0prjl8bW07qwYQKBgQCf\n2Z5st3t+xzIS5c4gPePXHRpFjQTxT+ST4zOjdVJSuV8u4GrgRAeuK0BSlbHKr3SH\nUGHIzTYgaCXXDe/Q3WNLXYdkBIHxlyk1JZCFYqgVE7opUpKUmgZSvfz55XDTrhI+\n3gPUt2snkXxY/Nlzep89Si6nYbdqr4RtCnHmxNA7twKBgQCzgwdc10fywMkSIWaK\nj6Cg+GsKyf9V0S0z3i5z/iBXq0NcI6SkcvuVOF4jSH0KCQUmR0SodziTCubZMf6M\nejVHMqiEYMO3Xvw7abRjtVmkppjqdTaLx+vWdwTfR/WNOahhQ52e8LZCNcv9X8T2\nWvFioYzZwwXukm4NDC6x2+gy2w==\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-h44pw@itis-database.iam.gserviceaccount.com",
    "client_id": "108816389082024306925",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-h44pw%40itis-database.iam.gserviceaccount.com",
    "universe_domain": "googleapis.com"
}

module.exports = {
    firebaseConfig,
    serviceAccount
}