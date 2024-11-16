import { logLogo } from "../../../assets";
import { ButtonRounded, Card, Content, InputPassword, InputText } from "../../../components";
import { UseAuthContext } from "../../../contexts/auth/AuthContext";
import { UseLoginContext } from "../../../contexts/auth/LoginContext";

const LoginPage = () => {
    const { login } = UseAuthContext();
    const { controller, onFieldChanges } = UseLoginContext();

    return (
        <Content>
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-[#E3E2E2]" />
            <div className="fixed top-0 bottom-0 left-0 right-0 overflow-auto flex justify-center">
                <div className="flex flex-col grow items-center">
                    <div className="flex flex-col text-center leading-3 mt-16">
                        <div className="flex justify-center mb-4">
                            <img src={logLogo} alt="logo gunner smart app" width={65} />
                        </div>
                        <label className="text-lg font-bold">GUNNER SMART APP</label>
                        <small className="font-normal">Selamat Datang</small>
                    </div>
                    <Card styles="w-[80%] md:w-[24rem] shadow-all mt-8">
                        <div className="px-3 py-5">
                            <div className="flex justify-center">
                                <span className="text-lg font-bold">Masuk Aplikasi</span>
                            </div>
                            <div className="mt-5">
                                <div className="mt-2">
                                    <label className="font-normal">Username</label>
                                    <div className="mt-1">
                                        <InputText value={controller.username} placeholder="Silahkan masukan username atau NRP" onChange={(value) => onFieldChanges('username', value)} />
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <label className="font-normal">Password</label>
                                    <div className="mt-1">
                                        <InputPassword value={controller.password} placeholder="Silahkan masukan password" onChange={(value) => onFieldChanges('password', value)} />
                                    </div>
                                </div>
                                <div className="mt-8">
                                    <div className="mt-2">
                                        <ButtonRounded title="Masuk" titleStyle="text-white" onClick={() => login(controller.username, controller.password)} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </Content>
    );
}
export default LoginPage;