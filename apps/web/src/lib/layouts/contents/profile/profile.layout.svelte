<script lang="ts">
	import { Avatar } from '@novelty/ui/components';

	type TProfile = {
		firstName: string;
		lastName: string;
		displayName: string;
		email: string;
		avatar: string;
	};

	export let profile: TProfile;

	const initials = profile.displayName
		.split(' ')
		.map((name) => name[0])
		.join('');
</script>

<section id="profile">
	<Avatar.Root class="outline-primary bg-muted mb-8 h-52 w-52 outline outline-4 outline-offset-4">
		<Avatar.Image id="avatar" src={profile.avatar} alt={profile.displayName} />
		<Avatar.Fallback class="text-4xl">{initials}</Avatar.Fallback>
	</Avatar.Root>

	<strong id="display-name">{profile.displayName}</strong>
	<small id="email" class="muted">{profile.email}</small>
</section>

<style lang="postcss">
	section#profile {
		@apply mb-8 flex flex-col items-center justify-center space-y-2;

		& > strong#display-name {
			@apply text-2xl font-bold;
		}

		& > small#email {
			@apply mt-0;
		}
	}
</style>
