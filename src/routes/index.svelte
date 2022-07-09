<script lang="ts">
	import { supabase } from '$lib/supabase-client';
	import { user } from '$lib/session-store';

	user.set(supabase.auth.user());

	supabase.auth.onAuthStateChange((_, session) => {
		user.set(session?.user || null);
	});

	let loading = false;
	let email: string;

	const handleLogin = async () => {
		try {
			loading = true;
			const { error } = await supabase.auth.signIn({ email });
			if (error) throw error;
			alert('Check your email for the login link!');
		} catch (error: any) {
			alert(error.error_description || error.message);
		} finally {
			loading = false;
		}
	};

	export let projectName = 'Project Template';
</script>

<main>
	<section class="prose m-auto flex flex-col items-center justify-center py-24 dark:prose-invert">
		<h1 class="">Welcome to {projectName}</h1>
		<p>Make your dreams come true!</p>
		<a href="/admin">
			<button
				class="rounded-sm bg-indigo-600 px-4 py-2 font-semibold transition-colors hover:bg-indigo-500"
				>Start now!</button
			>
		</a>
	</section>
	{#if !$user}
		<section>
			<form on:submit|preventDefault={handleLogin}>
				<input class="inputField" type="email" placeholder="Your email" bind:value={email} />
				<input
					type="submit"
					class="rounded-sm bg-indigo-600 py-2 px-4 font-semibold text-white"
					value={loading ? 'Loading' : 'Send magic link'}
					disabled={loading}
				/>
			</form>
		</section>
	{/if}
</main>
