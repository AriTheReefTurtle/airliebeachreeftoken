"use client";

import { useState } from "react";
import Modal from "./Modal";
import { UserProfile } from "@/app/useUserProfile";
import Image from "next/image";

export default function EditProfileModal({
  open,
  onClose,
  profile,
  onSave,
}: {
  open: boolean;
  onClose: () => void;
  profile: UserProfile;
  onSave: (updates: Partial<UserProfile>) => void;
}) {
  const [username, setUsername] = useState(profile.username);
  const [bio, setBio] = useState(profile.bio);
  const [avatar, setAvatar] = useState(profile.avatar);
  const [theme, setTheme] = useState(profile.theme);

  function save() {
    onSave({ username, bio, avatar, theme });
    onClose();
  }

  const avatars = [
    "turtle",
    "manta",
    "dolphin",
    "coral",
    "starfish",
    "whale",
    "octopus",
  ];

  return (
    <Modal open={open} onClose={onClose}>
      <h2 className="text-xl font-semibold mb-4 text-theme">Edit Profile</h2>

      <div className="space-y-4">

        {/* Username */}
        <div>
          <label className="block text-sm text-theme-dim mb-1">Username</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 rounded-lg bg-white/10 border border-white/20 text-theme"
          />
        </div>

        {/* Bio */}
        <div>
          <label className="block text-sm text-theme-dim mb-1">Bio</label>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="w-full p-2 rounded-lg bg-white/10 border border-white/20 text-theme"
            rows={3}
          />
        </div>

        {/* Avatar Picker */}
        <div>
          <label className="block text-sm text-theme-dim mb-1">Avatar</label>

          <div className="grid grid-cols-4 gap-3">
            {avatars.map((a) => {
              const path = `/avatars/${a}.svg`;
              const selected = avatar === path;

              return (
                <div
                  key={a}
                  onClick={() => setAvatar(path)}
                  className={`p-2 rounded-xl cursor-pointer border transition ${
                    selected
                      ? "border-[var(--reef-accent)] bg-white/10 shadow-md"
                      : "border-white/20 hover:border-[var(--reef-accent)]/50"
                  }`}
                >
                  <Image
                    src={path}
                    alt={a}
                    width={50}
                    height={50}
                    className="mx-auto"
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Theme Selector */}
        <div>
          <label className="block text-sm text-theme-dim mb-1">Theme</label>

          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="w-full p-2 rounded-lg bg-white/10 border border-white/20 text-theme"
          >
            <option value="reef-blue">Reef Blue (Dark)</option>
            <option value="red-coral">Red Coral (Dark)</option>
            <option value="turtle-green">Turtle Green (Light)</option>
            <option value="sand-beige">Sand Beige (Light)</option>
          </select>
        </div>

        {/* Save button */}
        <button
          onClick={save}
          className="w-full py-2 rounded-xl bg-[var(--reef-accent)] text-white font-semibold hover:opacity-90 transition"
        >
          Save Changes
        </button>
      </div>
    </Modal>
  );
}
