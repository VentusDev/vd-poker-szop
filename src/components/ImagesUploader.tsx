import * as React from 'react';

import { cn } from '@/lib/utils';
import toast from 'react-hot-toast';
//const ImagesUpload = (e:React.ChangeEvent<HTMLInputElement>{target: HTMLInputElement}) => {

const ImagesUpload = (e: { target: HTMLInputElement }) => {
	let imgArray: File[] = [];

	const input = e?.target as HTMLInputElement;

	let imgWrap = input
		.closest('.upload__box')
		?.querySelector('.upload__img-wrap');
	console.log(imgWrap);
	console.log(input);

	var maxLength = Number(input.getAttribute('data-max_length'));

	var files = e.target.files;
	var filesArr = Array.prototype.slice.call(files);
	var iterator = 0;
	filesArr.forEach(function (f) {
		if (!f.type.match('image.*')) {
			return;
		}

		if (imgArray?.length > maxLength) {
			return false;
		} else {
			var len = 0;
			for (var i = 0; i < imgArray.length; i++) {
				if (imgArray[i] !== undefined) {
					len++;
				}
			}
			if (len > maxLength) {
				return false;
			} else {
				imgArray.push(f);

				var reader = new FileReader();
				reader.onload = (e) => {
					console.log(imgArray);

					/*                     "<div className='upload__img-box'><div style='background-image: url(" +
                    e.target.result +
                    ")' data-number='" +
                    $(".upload__img-close").length +
                    "' data-file='" +
                    f.name +
                    "' className='img-bg'><div class='upload__img-close'></div></div></div>";
                    console.log(html); */

					const imgBox = document.createElement('div');
					imgBox.classList.add('upload__img-box');

					const bgImg = document.createElement('div');
					bgImg.classList.add('img-bg');
					bgImg.style.backgroundImage = "url('" + e?.target?.result + "')";
					bgImg.setAttribute('data-number', iterator.toString());
					bgImg.setAttribute('data-file', f.name);

					const imgClose = document.createElement('div');
					imgClose.addEventListener('click', function (e) {
						if (window.confirm('na pewno chcesz usunąć zdjęcie?')) {
							var file = (
								e.target as HTMLInputElement
							).parentElement?.getAttribute('data-file');
							for (var i = 0; i < imgArray.length; i++) {
								if (imgArray[i].name === file) {
									imgArray.splice(i, 1);
									break;
								}
							}

							(
								e.target as HTMLInputElement
							).parentElement?.parentElement?.remove();
							console.log(toast.success('zdjęcie zostało usunięte'));
							console.log(imgArray);
						}
					});
					imgClose.classList.add('upload__img-close');

					bgImg.appendChild(imgClose);

					imgBox.appendChild(bgImg);

					imgWrap?.appendChild(imgBox);
					iterator++;
				};
				reader.readAsDataURL(f);
			}
		}
	});
};

export interface InputProps
	extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputImagesUploader = React.forwardRef<HTMLInputElement, InputProps>(
	({ className, type, multiple, ...props }, ref) => {
		return (
			<div className='upload__box'>
				<div className='upload__btn-box'>
					<label className='upload__btn'>
						<p>załaduj zdjęcia</p>
						<input
							type='file'
							multiple
							data-max_length='20'
							className={cn('upload__inputfile', className)}
							onChange={(e) => ImagesUpload(e)}
							ref={ref}
							{...props}
						/>
					</label>
				</div>
				<div className='upload__img-wrap'></div>
			</div>
		);
	}
);
InputImagesUploader.displayName = 'InputImagesUploader';

export { InputImagesUploader };
