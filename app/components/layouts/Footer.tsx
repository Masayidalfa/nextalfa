const NAME = "MasayidAlfa";
const TAGLINE = "Jack of All Trades";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="flex flex-col items-center justify-center pt-10 pb-8 text-white">
            <h1 className="text-lg">{NAME}</h1>
            <p className="text-xs">{TAGLINE}</p>
            <p className="text-xs">
                Copyright &copy; {currentYear} by {NAME}
            </p>
        </footer>
    );
}