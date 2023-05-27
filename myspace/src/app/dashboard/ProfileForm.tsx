'use client';

export default function ProfileForm({ user }: any) {
  const userData = JSON.parse(user.value)
  const updateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);

    const body = {
      name: formData.get('name'),
      bio: formData.get('bio'),
      age: formData.get('age'),
      image: formData.get('image'),
    };

    const res = await fetch('/api/user', {
      method: 'PUT',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    await res.json();
  };

  return (
    <div>
      <h2>Edit Your Profile</h2>
      <form onSubmit={updateUser}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" defaultValue={userData?.name ?? ''} />
        <label htmlFor="bio">Bio</label>
        <textarea
          name="bio"
          cols={30}
          rows={10}
          defaultValue={userData?.bio ?? ''}
        ></textarea>
        <label htmlFor="age">Age</label>
        <input type="text" name="age" defaultValue={userData?.age ?? 0} />
        <label htmlFor="image">Profile Image URL</label>
        <input type="text" name="image" defaultValue={userData?.image ?? ''} />

        <button type="submit">Save</button>
      </form>
    </div>
  );
}