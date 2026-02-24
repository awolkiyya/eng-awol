export default function Footer() {
    return (
        <footer className="mt-32 w-full text-center py-3 text-gray-500 border-t border-gray-200">
            <p>
                © {new Date().getFullYear()}{" "}
                <a href="https://prebuiltui.com?utm_source=ryan">
                    PrebuiltUI
                </a>
                . All rights reserved.
            </p>
        </footer>
    );
}