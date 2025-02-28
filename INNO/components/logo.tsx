import Image from "next/image"
import Link from "next/link"

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center space-x-2 ${className}`}>
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/30Sep24%20Simon%20%20Free%20Upload%20%20%20%282%29-b4Eyrodq7aSYsp0DeYssZNQ0MPV0QF.png"
        alt="INNOWEB Logo"
        width={40}
        height={40}
        className="object-contain"
      />
      <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-violet-600">
        INNOWEB
      </span>
    </Link>
  )
}

