"use client"
import Link from "next/link";
import Image from 'next/image'
import { useState } from 'react'
import twitterIcon from "../images/twitter.svg";
import instagramIcon from "../images/instagram.svg";
import linkedInIcon from "../images/linkedin.svg";
import spotifyIcon from "../images/spotify.svg";
import appleMusicIcon from "../images/applemusic.svg";
import soundCloudIcon from "../images/soundcloud.svg";
import bandcampIcon from "../images/bandcamp.svg";
import mailIcon from "../images/mail.svg";
import ellipsis from "../images/ellipsis.svg";

export default function Links() {
  const [showMoreLinks, setShowMoreLinks] = useState(false)
  const iconHoverClassName =
    "opacity-30 hover:opacity-90 active:opacity-10 transition-all";
  return <div className="flex flex-row space-x-3 my-4">
    <Link
      className={`${iconHoverClassName}}`}
      target="_blank"
      href="https://www.instagram.com/reefloretto/"
    >
      <Image
        alt="instagram"
        src={instagramIcon}
        width={24}
        height={24}
      />
    </Link>
    <Link
      className={`${iconHoverClassName}}`}
      target="_blank"
      href="https://twitter.com/reefloretto"
    >
      <Image alt="twitter" src={twitterIcon} width={24} height={24} />
    </Link>
    {showMoreLinks && (
      <>
        <Link
          className={`${iconHoverClassName}}`}
          target="_blank"
          href="https://open.spotify.com/artist/7G7ksSJ4R5bwi7DqW4HkXE?si=g7aHrQUjTSqIW7LqqKt7Rg"
        >
          <Image alt="spotify" src={spotifyIcon} width={24} height={24} />
        </Link>
        <Link
          className={`${iconHoverClassName}}`}
          target="_blank"
          href="https://music.apple.com/us/artist/reef-loretto/654440007"
        >
          <Image
            alt="applemusic"
            src={appleMusicIcon}
            width={24}
            height={24}
          />
        </Link>
        <Link
          className={`${iconHoverClassName}}`}
          target="_blank"
          href="https://soundcloud.com/reefloretto"
        >
          <Image
            alt="soundcloud"
            src={soundCloudIcon}
            width={24}
            height={24}
          />
        </Link>
        <Link
          className={`${iconHoverClassName}}`}
          target="_blank"
          href="https://reefloretto.bandcamp.com/"
        >
          <Image alt="bandcamp" src={bandcampIcon} width={24} height={24} />
        </Link>
        <Link
          className={`${iconHoverClassName}}`}
          target="_blank"
          href="https://www.linkedin.com/in/reefloretto/"
        >
          <Image alt="linkedin" src={linkedInIcon} width={24} height={24} />
        </Link>
        <Link
          className={`${iconHoverClassName}}`}
          target="_blank"
          href="mailto:r@reefloretto.com"
        >
          <Image alt="mail" src={mailIcon} width={24} height={24} />
        </Link>
      </>
    )}
    <div className={`${iconHoverClassName} cursor-pointer`} onClick={() => {
      setShowMoreLinks(!showMoreLinks)
    }}>
      <Image alt="more" src={ellipsis} width={24} height={24} />
    </div>
  </div>
}
