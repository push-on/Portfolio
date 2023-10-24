export default function viewport(element) {
	return {
		enterViewport() {
			element.style.transform = 'translateY(0)';
		},
		exitViewport() {
			element.style.transform = 'translateY(100%)';
		}
	}
}