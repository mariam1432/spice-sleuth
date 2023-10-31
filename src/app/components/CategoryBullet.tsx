interface CategoryBulletInterface {
  title: string;
  imageURL: string;
}

export default function CategoryBullet({
  title,
  imageURL,
}: CategoryBulletInterface) {
  return (
    <a className="bg-white flex rounded-md py-2 px-4 items-center space-x-4 w-fit cursor-pointer">
      <img
        src={imageURL}
        className="w-8 h-8 object-cover rounded-full"
        alt={title}
      />
      <span className="text-xs font-semibold sm:text-sm">{title}</span>
    </a>
  );
}
