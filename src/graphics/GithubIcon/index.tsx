import * as React from 'react'

type Props = {
  className?: string
}

export const GithubIcon: React.FC<Props> = ({ className }) => {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.97251 0C4.01836 0 0 4.13039 0 9.22263C0 13.2965 2.58716 16.7479 6.11008 17.9927C6.55048 18.0492 6.7156 17.7664 6.7156 17.54C6.7156 17.3137 6.7156 16.7479 6.7156 15.9557C4.23854 16.5215 3.68808 14.711 3.68808 14.711C3.30276 13.6359 2.69725 13.3531 2.69725 13.3531C1.87157 12.7873 2.7523 12.7873 2.7523 12.7873C3.63304 12.8438 4.12845 13.7491 4.12845 13.7491C4.95414 15.1636 6.22018 14.7675 6.7156 14.5412C6.77068 13.9189 7.0459 13.5228 7.26604 13.2965C5.28441 13.0701 3.19267 12.278 3.19267 8.71344C3.19267 7.695 3.52294 6.90282 4.12845 6.22386C4.0734 6.05415 3.74312 5.09226 4.23854 3.84749C4.23854 3.84749 5.00918 3.62116 6.7156 4.80936C7.43122 4.58304 8.20186 4.52646 8.97251 4.52646C9.74315 4.52646 10.5138 4.63962 11.2293 4.80936C12.9358 3.62116 13.7065 3.84749 13.7065 3.84749C14.2019 5.09226 13.8716 6.05415 13.8166 6.28047C14.367 6.90282 14.7523 7.75155 14.7523 8.76999C14.7523 12.3346 12.6606 13.0701 10.6789 13.2965C11.0092 13.5794 11.2844 14.1452 11.2844 14.9939C11.2844 16.2387 11.2844 17.2005 11.2844 17.54C11.2844 17.7664 11.4495 18.0492 11.89 17.9927C15.4679 16.7479 18 13.2965 18 9.22263C17.945 4.13039 13.9267 0 8.97251 0Z"
        fill="currentColor"
      />
    </svg>
  )
}